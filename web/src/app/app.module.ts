import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from "primeng/primeng";
import { RadioButtonModule } from "primeng/primeng";
import { ButtonModule } from "primeng/primeng";
import { PaginatorModule } from "primeng/primeng";
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaperComponent } from './paper/paper.component';
import { PaperEditComponent } from './paper-edit/paper-edit.component';
import { HttpClientModule } from "@angular/common/http";

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
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    PaginatorModule,
    FieldsetModule,
    CalendarModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
