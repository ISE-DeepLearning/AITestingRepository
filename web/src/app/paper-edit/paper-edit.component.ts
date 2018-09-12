import { Component, OnInit } from '@angular/core';
import { Config } from "../config";
import { PaperService } from "../service/paper.service";
import { LatexPaperInfo, Paper } from "../model/paper";
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-paper-edit',
  templateUrl: './paper-edit.component.html',
  styleUrls: [ './paper-edit.component.css' ],
  providers: [ MessageService ]
})
export class PaperEditComponent implements OnInit {

  paper: Paper;

  authorName: string;

  latexInfo: LatexPaperInfo;

  constructor(
    private paperService: PaperService,
    private messageService: MessageService
  ) {
    this.paper = new Paper({
      authors: [],
      title: '',
      publishTime: '',
      paperAbstract: '',
      publishJournal: '',
      url: ''
    });
    this.latexInfo = new LatexPaperInfo({
      info: '',
      url: '',
      paperAbstract: ''
    });
  }

  ngOnInit() {
  }

  addAuthor(author: string): void {
    if (Config.isValid(author)) {
      for (let i = 0; i < this.paper.authors.length; i++) {
        if (this.paper.authors[ i ] === author) {
          return;
        }
      }
      this.paper.authors.push(author);
    }
  }

  deleteAuthor(author: string): void {
    for (let i = 0; i < this.paper.authors.length; i++) {
      if (this.paper.authors[ i ] === author) {
        this.paper.authors.splice(i, 1);
        break;
      }
    }
  }

  uploadPaper(): void {
    if (!Config.isValid(this.paper.title)) {
      this.showError('Title cannot be empty!');
      return;
    }
    if (this.paper.authors.length < 1) {
      this.showError('Enter at least 1 author!');
      return;
    }
    if (!Config.isValid(this.paper.publishJournal)) {
      this.showError('Publish Journal cannot be empty!');
      return;
    }
    if (!Config.isValid(this.paper.url)) {
      this.showError('URL cannot be empty!');
      return;
    }

    this.paperService.uploadPaper(this.paper)
      .subscribe(res => {
        if (res['code'] != 200) {
          this.showError(res['message']);
          return;
        }
        this.showInfo('Success!');
      });
  }

  uploadLatexInfo(): void {
    console.log(this.latexInfo);
    if (!Config.isValid(this.latexInfo.info)) {
      this.showError("Info cannot be empty!");
      return;
    }
    if (!Config.isValid(this.latexInfo.url)) {
      this.showError("URL cannot be empty!");
    }
    this.paperService.uploadLatexInfo(this.latexInfo)
      .subscribe(res => {
        console.log(res);
        if (res['code'] != 200) {
          this.showError(res['message']);
          return;
        }
        this.showInfo("Success!");
      });
  }

  reset(): void {
    this.paper = new Paper({
      authors: [],
      title: '',
      publishTime: '',
      paperAbstract: '',
      publishJournal: '',
      url: ''
    });
  }

  resetLatex(): void {
    this.latexInfo = new LatexPaperInfo({
      info: '',
      url: '',
      paperAbstract: ''
    });
  }

  showError(msg: string) {
    this.messageService.add({ key: 'info', severity: 'error', summary: 'Error Message', detail: msg });
  }

  showWarning(msg: string) {
    this.messageService.add({ key: 'info', severity: 'warn', summary: 'Warn Message', detail: msg });
  }

  showInfo(msg: string) {
    this.messageService.add({ key: 'info', severity: 'info', summary: 'Info Message', detail: msg });
  }

  checkTitle(title: string): void {
    console.log(title);
    if (Config.isValid(title)) {
      this.paperService.checkTitle(title)
        .subscribe(res => {
          if (res[ 'code' ] != 200) {
            this.showError(res[ 'message' ]);
            return;
          }
          const data: number = res[ 'data' ];
          if (data > 0) {
            this.showInfo('Paper exists!');
            return;
          }
        })
    }
  }

}
