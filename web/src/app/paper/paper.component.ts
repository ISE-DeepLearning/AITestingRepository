import { Component, OnInit } from '@angular/core';
import { Paper } from "../model/paper";
import { ActivatedRoute } from "@angular/router";
import { Config } from "../config";
import { PaperService } from "../service/paper.service";
import { MessageService } from "primeng/api";
import { Subscription } from "rxjs";
import { Tag } from "../model/tag";

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

  searchTag: Tag;

  private sub : Subscription;

  constructor(
    private route: ActivatedRoute,
    private paperService: PaperService,
    private messageService: MessageService
  ) {
    this.papers = [];
    this.currentPage = 1;
    this.pageSize = 10;
    this.totalPages = 0;
    this.totalElements = 0;
    this.searchTag = null;
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(queryParams => {
      this.type = Config.isValid(queryParams['type']) ? parseInt(queryParams['type']) : Config.type_title;
      this.keywords = queryParams['keywords'];
      this.currentPage = 1;
      this.pageSize = 10;
      this.totalPages = 0;
      this.totalElements = 0;
      this.searchTag = null;
      this.searchPaper();
    });
  }

  searchPaper(): void {
    if (this.searchTag != null) {
      this.paperService.getPapersByTag(this.searchTag, this.currentPage, this.pageSize)
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
          this.totalPages = data['totalPages'];
          this.totalElements = data['totalElements'];
        });
    } else {
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
          this.totalPages = data['totalPages'];
          this.totalElements = data['totalElements'];
        });
    }
  }

  chooseTag(tag: Tag): void {
    this.searchTag = tag;
    this.currentPage = 1;
    this.pageSize = 10;
    this.totalPages = 0;
    this.totalElements = 0;
    this.searchPaper();
  }

  deleteTag(): void {
    this.currentPage = 1;
    this.pageSize = 10;
    this.totalPages = 0;
    this.totalElements = 0;
    this.keywords = null;
    this.type = Config.type_title;
    this.searchTag = null;
    this.searchPaper();
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
