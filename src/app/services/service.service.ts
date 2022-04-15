import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { retry, catchError } from 'rxjs/operators';

import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  data: any;
  url: string = 'https://api.rawg.io/api/games';
  key: string = '?key=8c374e44bf5148d1ab96c28e76503e1f';

  // url:'https://api.rawg.io/api/games';
  //  params:string ='';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http
      .get(this.url + this.key)

      .pipe(
        retry(1),

        catchError((error) =>
          throwError(() => `Something went wrong: ${error}`)
        )
      );
  }

  getData2(id: any) {
    return this.http
      .get(this.url + '/' + id + this.key)

      .pipe(
        retry(1),

        catchError((error) =>
          throwError(() => `Something went wrong: ${error}`)
        )
      );
  }
}
