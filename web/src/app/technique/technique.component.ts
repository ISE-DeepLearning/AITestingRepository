import { Component, OnInit } from '@angular/core';
import { Project } from "../model/project";
import { MessageService } from "primeng/api";
import { ProjectService } from "../service/project.service";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-technique',
  templateUrl: './technique.component.html',
  styleUrls: ['./technique.component.css'],
  providers: [ MessageService ]
})
export class TechniqueComponent implements OnInit {

  projects: Project[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalElements: number;

  type: number;
  keywords: string;

  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService,
    private projectService: ProjectService
  ) {
    this.projects = [];
    this.currentPage = 1;
    this.pageSize = 10;
    this.totalPages = 0;
    this.totalElements = 0;
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(queryParams => {
      this.keywords = queryParams['keywords'];
      this.searchProject();
    });
  }

  searchProject(): void {
    this.projectService.getProjects(this.keywords, this.currentPage, this.pageSize)
      .subscribe(res => {
        if (res['code'] != 200) {
          this.showError(res['message']);
          return;
        }
        const data: object = res['data'];
        const content: any[] = data['content'];
        this.projects = [];
        for (let i = 0; i < content.length; i++) {
          this.projects.push(new Project(content[i]));
        }
        this.totalPages = data['totalPages'];
        this.totalElements = data['totalElements'];
      });
  }

  paginate($event): void {
    this.currentPage = $event['page'] + 1;
    this.searchProject();
  }

  showError(msg: string) {
    this.messageService.add({ key: 'info', severity: 'error', summary: 'Error Message', detail: msg });
  }

}
