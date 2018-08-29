import { Component, OnInit } from '@angular/core';
import { Paper } from "../model/paper";
import { ActivatedRoute } from "@angular/router";
import { Config } from "../config";

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
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
    private route: ActivatedRoute
  ) {
    const params = route.snapshot.queryParamMap;
    this.type = Config.isValid(params.get('type')) ? parseInt(params.get('type')) : Config.type_title;
    this.keywords = params.get('keywords');
    this.papers = [
      new Paper({
        authors: ['Mark Trakhtenbrot'],
        title: 'Implementation-Oriented Mutation Testing of Statechart Models',
        publishJournal: 'Proceedings of the 5th International Workshop on Mutation Analysis (MUTATION\'10)Paris, France, 6 April 2010.',
        paperAbstract: 'Available soon...',
        url: 'http://www.google.com/search?q=Implementation-Oriented Mutation Testing of Statechart Models'
      }),
      new Paper({
        authors: ['Mark Trakhtenbrot', 'Nicos Malevris', 'Maria Kallia'],
        title: 'Implementation-Oriented Mutation Testing of Statechart Models',
        publishJournal: 'Proceedings of the 5th International Workshop on Mutation Analysis (MUTATION\'10)Paris, France, 6 April 2010.',
        paperAbstract: 'Available soon...',
        url: 'http://www.google.com/search?q=Implementation-Oriented Mutation Testing of Statechart Models'
      }),
    ];
    this.currentPage = 1;
    this.pageSize = 10;
    this.totalPage = 0;
    this.totalRecords = 0;
  }

  ngOnInit() {
    console.log(this.type);
  }

  toggleAbstract(paper: Paper) {
    paper.showAbstract = !paper.showAbstract;
  }

  paginate($event): void {

  }

}
