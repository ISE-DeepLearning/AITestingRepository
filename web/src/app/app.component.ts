import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedNav: string;
  types: any[];

  constructor() {
    this.selectedNav = 'home';
    this.types = [
      { label: 'By paper title', value: 0 },
      { label: 'By author name', value: 1}
    ]
  }

  onSelectNav(nav: string): void {
    this.selectedNav = nav;
  }
}
