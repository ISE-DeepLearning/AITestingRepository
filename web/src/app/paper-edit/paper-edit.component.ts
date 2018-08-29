import { Component, OnInit } from '@angular/core';
import { Config } from "../config";
import { PaperService } from "../service/paper.service";
import { Paper } from "../model/paper";

@Component({
  selector: 'app-paper-edit',
  templateUrl: './paper-edit.component.html',
  styleUrls: ['./paper-edit.component.css']
})
export class PaperEditComponent implements OnInit {

  paper: Paper;

  authorName: string;

  constructor(
    private paperService: PaperService
  )
  {
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
      for (let i = 0; i <  this.paper.authors.length; i++) {
        if (this.paper.authors[i] === author) {
          return;
        }
      }
      this.paper.authors.push(author);
    }
  }

  deleteAuthor(author: string): void {
    for (let i = 0; i < this.paper.authors.length; i++) {
      if (this.paper.authors[i] === author) {
        this.paper.authors.splice(i, 1);
        break;
      }
    }
  }

  uploadPaper(): void {
    this.paperService.uploadPaper(this.paper)
      .subscribe(res => {
        console.log(res);
      });
  }

}
