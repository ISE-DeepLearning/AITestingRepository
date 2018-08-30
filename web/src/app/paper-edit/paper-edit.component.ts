import { Component, OnInit } from '@angular/core';
import { Config } from "../config";
import { PaperService } from "../service/paper.service";
import { Paper } from "../model/paper";
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
        console.log(res);
      });
  }

  showError(msg: string) {
    this.messageService.add({ key: 'info', severity: 'error', summary: 'Error Message', detail: msg });
  }

  checkTitle(title: string) {
    if (Config.isValid(title)) {

    }
  }


}
