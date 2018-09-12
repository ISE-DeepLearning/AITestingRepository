import { Component } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { PaperQueryParameters } from "./model/paper";
import { ActivatedRoute } from "@angular/router";
import { Config } from "./config";
import { ProjectQueryParameters } from "./model/project";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ Location, { provide: LocationStrategy, useClass: PathLocationStrategy } ],
})
export class AppComponent {

  selectedNav: string;
  types: any[];

  paperQueryParams: PaperQueryParameters;
  projectQueryParams: ProjectQueryParameters;

  constructor(
    private route: ActivatedRoute,
    private location: Location
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

}
