import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Config } from "../config";
import { catchError } from "rxjs/operators";
import { Project } from "../model/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }

  getProjects(keywords: string, currentPage: number, pageSize: number): Observable<object> {
    let url: string = '';
    if (Config.isValid(keywords)) {
      url = `${Config.base_url}/api/project/findByKeyword?currentPage=${currentPage}&pageSize=${pageSize}&keywords=${keywords}`
    } else {
      url = `${Config.base_url}/api/project/findByKeyword?currentPage=${currentPage}&pageSize=${pageSize}`
    }
    return this.http.get(url, {
      responseType: 'json',
      withCredentials: true
    }).pipe(
      catchError(this.handleError('getProjects', {}))
    );
  }

  uploadProject(project: Project): Observable<object> {
    const url: string = `${Config.base_url}/api/project/create`;
    return this.http.post(url,
      project, {
      responseType: 'json',
      withCredentials: true
    }).pipe(
      catchError(this.handleError('uploadProject', {}))
    );
  }

  checkTitle(title: string): Observable<object> {
    const url: string = `${Config.base_url}/api/project/isExistTitle?title=${title}`;
    return this.http.get(url, {
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
      result['message'] = error.message;

      return of(result);
    };
  }

}
