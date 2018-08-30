import { Component, OnInit } from '@angular/core';
import { Paper } from "../model/paper";
import { ActivatedRoute } from "@angular/router";
import { Config } from "../config";
import { PaperService } from "../service/paper.service";
import { MessageService } from "primeng/api";

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
  totalPage: number;
  totalRecords: number;

  type: number;
  keywords: string;

  constructor(
    private route: ActivatedRoute,
    private paperService: PaperService,
    private messageService: MessageService
  ) {
    const params = route.snapshot.queryParamMap;
    this.type = Config.isValid(params.get('type')) ? parseInt(params.get('type')) : Config.type_title;
    this.keywords = params.get('keywords');
    this.papers = [];
    this.currentPage = 1;
    this.pageSize = 10;
    this.totalPage = 0;
    this.totalRecords = 0;
  }

  ngOnInit() {
    this.searchPaper();
  }

  searchPaper(): void {
    this.paperService.getPapers(this.type, this.keywords, this.currentPage, this.pageSize)
      .subscribe(res => {
        console.log(res);
      });
  }

  toggleAbstract(paper: Paper) {
    paper.showAbstract = !paper.showAbstract;
  }

  paginate($event): void {

  }

  showError(msg: string) {
    this.messageService.add({ key: 'info', severity: 'error', summary: 'Error Message', detail: msg });
  }

}
