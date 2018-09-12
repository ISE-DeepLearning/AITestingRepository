export interface ProjectQueryParameters {
  keywords?: string;
}
export interface ProjectParameters {
  title: string;
  url: string;
  introduction: string;
}
export class Project {
  title: string;
  url: string;
  introduction: string;

  constructor(parameters?: ProjectParameters) {
    this.title = parameters.title;
    this.url = parameters.url;
    this.introduction = parameters.introduction;
  }
}
