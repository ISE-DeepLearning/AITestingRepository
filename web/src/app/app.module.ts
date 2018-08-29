import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DashboardComponent } from './dashboard/dashboard.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from "primeng/primeng";
import { RadioButtonModule } from "primeng/primeng";
import { ButtonModule } from "primeng/primeng";
import { PaginatorModule } from "primeng/primeng";
import { PaperComponent } from './paper/paper.component';
import { PaperEditComponent } from './paper-edit/paper-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PaperComponent,
    PaperEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
