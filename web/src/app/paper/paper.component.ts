import { Component, OnInit } from '@angular/core';
import { Paper } from "../model/paper";

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {

  papers: Paper[];

  constructor() { }

  ngOnInit() {
  }

}
