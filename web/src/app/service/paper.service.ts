import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Paper } from "../model/paper";
import { Config } from "../config";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PaperService {

  header: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {
    this.header = new HttpHeaders();
    this.header.append("Access-Control-Allow-Origin", "*");
  }

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
      catchError(this.handleError('getPapers', {}))
    );
  }

  uploadPaper(paper: Paper): Observable<object> {
    return this.http.post( `${Config.base_url}/api/paper/create`,
      paper, {
      responseType: 'json',
      withCredentials: true
    }).pipe(
      catchError(this.handleError('uploadPaper', {}))
    );
  }

  checkTitle(title: string): Observable<object> {
    return this.http.post(`${Config.base_url}/test`,
      title, {
      responseType: 'json',
      withCredentials: true
    }).pipe(
      catchError(this.handleError('checkTitle', {}))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      // this.ms.showError(error.message);
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      result['success'] = false;
      result['message'] = error.message;

      return of(result);
    };
  }

}


