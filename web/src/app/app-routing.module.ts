import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PaperComponent } from "./paper/paper.component";
import { PaperEditComponent } from "./paper-edit/paper-edit.component";
import { TechniqueComponent } from "./technique/technique.component";
import { TechniqueEditComponent } from "./technique-edit/technique-edit.component";

const routes: Routes = [
  { path: '', redirectTo: '/paper', pathMatch: 'full' },
  // { path: 'home', component: DashboardComponent },
  { path: 'paper', component: PaperComponent },
  { path: 'paper/edit', component: PaperEditComponent },
  { path: 'tech', component: TechniqueComponent },
  { path: 'tech/edit', component: TechniqueEditComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
