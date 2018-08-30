import { Component, OnInit } from '@angular/core';
import { Paper } from "../model/paper";
import { ActivatedRoute } from "@angular/router";
import { Config } from "../config";
import { PaperService } from "../service/paper.service";
import { MessageService } from "primeng/api";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css'],
  providers: [ MessageService ]
})
export class PaperComponent implements OnInit {

  papers: Paper[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalElements: number;

  type: number;
  keywords: string;

  private sub : Subscription;

  constructor(
    private route: ActivatedRoute,
    private paperService: PaperService,
    private messageService: MessageService
  ) {
    // const params = route.snapshot.queryParamMap;
    // this.type = Config.isValid(params.get('type')) ? parseInt(params.get('type')) : Config.type_title;
    // this.keywords = params.get('keywords');
    this.papers = [];
    this.currentPage = 1;
    this.pageSize = 10;
    this.totalPages = 0;
    this.totalElements = 0;
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(queryParams => {
      this.type = Config.isValid(queryParams['type']) ? parseInt(queryParams['type']) : Config.type_title;
      this.keywords = queryParams['keywords'];
      this.searchPaper();
    });
  }

  searchPaper(): void {
    this.paperService.getPapers(this.type, this.keywords, this.currentPage, this.pageSize)
      .subscribe(res => {
        if (res['code'] != 200) {
          this.showError(res['message']);
          return;
        }
        const data: object = res['data'];
        const content: any[] = data['content'];
        this.papers = [];
        for (let i = 0; i < content.length; i++) {
          this.papers.push(new Paper(content[i]));
        }
        // this.currentPage = data['currentPage'];
        // this.pageSize = data['pageSize'];
        this.totalPages = data['totalPages'];
        this.totalElements = data['totalElements'];
      });
  }

  toggleAbstract(paper: Paper) {
    paper.showAbstract = !paper.showAbstract;
  }

  paginate($event): void {
    this.currentPage = $event['page'] + 1;
    this.searchPaper();
  }

  showError(msg: string) {
    this.messageService.add({ key: 'info', severity: 'error', summary: 'Error Message', detail: msg });
  }

}
