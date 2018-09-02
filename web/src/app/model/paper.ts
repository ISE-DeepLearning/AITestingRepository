export interface PaperQueryParameters {
  type?: number;
  keywords?: string;
}
export interface PaperParameters {
  authors: any[];
  title: string;
  publishJournal: string;
  paperAbstract: string;
  url: string;
  publishTime?: string;
}
export class Paper {
  authors: any[] = [];
  title: string = '';
  publishJournal: string = '';
  paperAbstract: string = '';
  url: string = '';
  publishTime?: string = '';

  showAbstract: boolean;

  constructor(parameters?: PaperParameters) {
    this.authors = parameters.authors;
    this.title = parameters.title;
    this.publishJournal = parameters.publishJournal;
    this.paperAbstract = parameters.paperAbstract;
    this.url = parameters.url;
    this.showAbstract = false;
    this.publishTime = parameters.publishTime;
  }

  getAuthorsStr(): string {
    let result: string = '';
    for (let i = 0; i < this.authors.length; i++) {
      if (i == 0) {
        result += this.authors[i]['name'];
      } else {
        result += (' and ' + this.authors[i]['name']);
      }
    }
    return result;
  }
}
export interface LatexPaperInfoParameters {
  info: string;
  url: string;
  paperAbstract: string;
}
export class LatexPaperInfo {
  info: string;
  url: string;
  paperAbstract: string;

  constructor(parameters?: LatexPaperInfoParameters) {
    this.info = parameters.info;
    this.url = parameters.url;
    this.paperAbstract = parameters.paperAbstract;
  }
}
