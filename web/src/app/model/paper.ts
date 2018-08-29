export interface PaperQueryParameters {
  type: number;
  keywords: string;
}
export interface PaperParameters {
  authors: string[];
  title: string;
  publishJournal: string;
  paperAbstract: string;
  url: string;
  publishTime?: string;
}
export class Paper {
  authors: string[];
  title: string;
  publishJournal: string;
  paperAbstract: string;
  url: string;
  publishTime?: string;

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
        result += this.authors[i];
      } else {
        result += (' and ' + this.authors[i]);
      }
    }
    return result;
  }
}
