import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Paper } from "../model/paper";
import { Config } from "../config";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PaperService {

  constructor(
    private http: HttpClient
  ) { }

  getPapers(type: number, keywords: string, currentPage: number, pageSize: number): Observable<object> {
    const params: HttpParams = new HttpParams();
    params.append('type', '' + type);
    if (Config.isValid(keywords)) {
      params.append('keywords', keywords);
    }
    params.append('currentPage', '' + currentPage);
    params.append('pageSize', '' + pageSize);
    return this.http.get(Config.base_url + '/paper/list', {
      params: params,
      responseType: 'json',
      withCredentials: true
    }).pipe(
      catchError(this.handleError('getPapers', []))
    );
  }

  uploadPaper(paper: Paper): Observable<object> {
    console.log(paper);
    return this.http.post(Config.base_url + '/paper',
      paper, {
      responseType: 'json',
      withCredentials: true
    }).pipe(
      catchError(this.handleError('uploadPaper', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}


