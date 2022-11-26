import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { StorageType } from './storage.type';
import { Token } from '../interfaces';
import { HttpResponse } from './base-http.type';
const DEFAULT_HEADERS = {
  'X-Requested-With': 'XMLHttpRequest',
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
};

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  private readonly _baseHref = '/api/v1';

  private _createDefaultHeaders(noAuth?: boolean): HttpHeaders {
    const headers = new HttpHeaders(DEFAULT_HEADERS);
    const token = this._storageService.getItem<Token>(StorageType.Token);

    if (token?.access_token && !noAuth) {
      return headers.append('Authorization', `Bearer ${token.access_token}`);
    }

    return headers;
  }

  constructor(
    private _http: HttpClient,
    private _storageService: StorageService
  ) {}

  public get<T>(
    url: string,
    params?: any
  ): Observable<HttpResponse<T>['data']> {
    let queryParams = new HttpParams();
    for (let key in params) {
      queryParams = queryParams.append(key, params[key]);
    }
    return this._http
      .get<HttpResponse<T>>(this._baseHref + url, {
        params: queryParams,
        headers: this._createDefaultHeaders(),
      })
      .pipe(
        map((res) => {
          return res.data;
        })
      );
  }

  public post<T>(
    url: string,
    params?: any
  ): Observable<HttpResponse<T>['data']> {
    return this._http
      .post<HttpResponse<T>>(this._baseHref + url, params, {
        headers: this._createDefaultHeaders(),
      })
      .pipe(
        map((res) => {
          return res.data;
        })
      );
  }

  public put<T>(
    url: string,
    params?: any
  ): Observable<HttpResponse<T>['data']> {
    return this._http
      .put<HttpResponse<T>>(this._baseHref + url, params, {
        headers: this._createDefaultHeaders(),
      })
      .pipe(
        map((res) => {
          return res.data;
        })
      );
  }

  public delete<T>(url: string): Observable<HttpResponse<T>['data']> {
    return this._http
      .delete<HttpResponse<T>>(`${this._baseHref}${url}`, {
        headers: this._createDefaultHeaders(),
      })
      .pipe(
        map((res) => {
          return res.data;
        })
      );
  }
}
