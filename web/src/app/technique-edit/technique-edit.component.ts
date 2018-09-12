import { Component, OnInit } from '@angular/core';
import { Project } from "../model/project";
import { ProjectService } from "../service/project.service";
import { MessageService } from "primeng/api";
import { Config } from "../config";

@Component({
  selector: 'app-technique-edit',
  templateUrl: './technique-edit.component.html',
  styleUrls: ['./technique-edit.component.css'],
  providers: [ MessageService ]
})
export class TechniqueEditComponent implements OnInit {

  project: Project;

  constructor(
    private projectService: ProjectService,
    private messageService: MessageService
  ) {
    this.project = new Project({
      title: '',
      url: '',
      introduction: ''
    });
  }

  ngOnInit() {
  }

  uploadProject(): void {
    if (!Config.isValid(this.project.title)) {
      this.showError('Title cannot be empty!');
      return;
    }
    if (!Config.isValid(this.project.url)) {
      this.showError('URL cannot be empty!');
      return;
    }

    this.projectService.uploadProject(this.project)
      .subscribe(res => {
        if (res['code'] != 200) {
          this.showError(res['message']);
          return;
        }
        this.showInfo('Success!');
      });
  }

  reset(): void {
    this.project = new Project({
      title: '',
      url: '',
      introduction: ''
    });
  }

  checkTitle(title: string) {
    console.log(title);
    if (Config.isValid(title)) {
      this.projectService.checkTitle(title)
        .subscribe(res => {
          if (res['code'] != 200) {
            this.showError(res['meesage']);
            return;
          }
          const data: number = res['data'];
          if (data > 0) {
            this.showInfo('Project exists!');
            return;
          }
        })
    }
  }

  showError(msg: string) {
    this.messageService.add({ key: 'info', severity: 'error', summary: 'Error Message', detail: msg });
  }

  showWarning(msg: string) {
    this.messageService.add({ key: 'info', severity: 'warn', summary: 'Warn Message', detail: msg });
  }

  showInfo(msg: string) {
    this.messageService.add({ key: 'info', severity: 'info', summary: 'Info Message', detail: msg });
  }

}
