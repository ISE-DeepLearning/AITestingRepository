import { Component } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { PaperQueryParameters } from "./model/paper";
import { ActivatedRoute } from "@angular/router";
import { Config } from "./config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ Location, { provide: LocationStrategy, useClass: PathLocationStrategy } ],
})
export class AppComponent {

  selectedNav: string;
  types: any[];

  queryParams: PaperQueryParameters;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {
    let path: string = location.path();
    this.selectedNav = path.substring(1, path.length);
    if (this.selectedNav == '') {
      this.selectedNav = 'home';
    }
    this.types = [
      { label: 'By paper title', value: 0 },
      { label: 'By author name', value: 1 }
    ];
    this.queryParams = {
      type: Config.type_title,
      keywords: ''
    };
  }

  onSelectNav(nav: string): void {
    this.selectedNav = nav;
  }

}
