import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { PaperQueryParameters } from "./model/paper";
import { ActivatedRoute } from "@angular/router";
import { Config } from "./config";
import { ProjectQueryParameters } from "./model/project";
import { Tag } from "./model/tag";
import { PaperService } from "./service/paper.service";

declare var d3;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ Location, { provide: LocationStrategy, useClass: PathLocationStrategy } ],
})
export class AppComponent implements OnInit {

  selectedNav: string;
  types: any[];
  // tags: Tag[];

  paperQueryParams: PaperQueryParameters;
  projectQueryParams: ProjectQueryParameters;

  fill = d3.scaleOrdinal(d3.schemeCategory10);
  layout: any;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private ps: PaperService
  ) {
    if (location) {
      let path: string = location.path();
      this.selectedNav = path.substring(1, path.length);
      if (this.selectedNav == '') {
        this.selectedNav = 'paper';
      }
    } else {
      this.selectedNav = 'paper';
    }
    this.types = [
      { label: 'By paper title', value: Config.type_title },
      { label: 'By author name', value: Config.type_author }
    ];
    this.paperQueryParams = {
      type: Config.type_title,
    };
    this.projectQueryParams = {};

  }

  onSelectNav(nav: string): void {
    this.selectedNav = nav;
  }

  ngOnInit(): void {
    this.ps.getTags()
      .subscribe(res => {
        if (res['code'] != 200) {
          return;
        }
        const data: Tag[] = res['data'];

        this.layout = d3.layout.cloud()
          .size([350, 350])
          .words(
            data.map(function(d: Tag) {
              return { text: d.name, size: 12 + Math.random() * 10 };
            })
          )
          .padding(5)
          .rotate(function() { return ~~(Math.random() * 2) * 90; })
          .font("Impact")
          .fontSize(function(d) { return d.size; })
          .on("end", words => {
            console.log(words);
            d3.select("#word-cloud").append("svg")
              .attr("width", this.layout.size()[0])
              .attr("height", this.layout.size()[1])
              .append("g")
              .attr("transform", "translate(" + this.layout.size()[0] / 2 + "," + this.layout.size()[1] / 2 + ")")
              .selectAll("text")
              .data(words)
              .enter().append("text")
              .style("font-size", (d) => { return d.size + "px"; })
              .style("font-family", "Impact")
              .style("fill", (d, i) => { return this.fill(i); })
              .attr("text-anchor", "middle")
              .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
              })
              .text((d) => { return d.text; });
          });
        console.log(this.layout);
        this.layout.start();
      });
  }

}
