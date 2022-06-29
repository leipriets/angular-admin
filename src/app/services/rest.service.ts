import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class RestService {

  abstract get endpoint(): string;

  constructor(
    protected http: HttpClient

  ) { }

  public all(page?: number): Observable<any> {
    let url = this.endpoint;

    if (page) {
        url += `?page=${page}`;
    }

    return this.http.get(url)
  }

  public get(userId: number): Observable<any> {
    return this.http.get(`${this.endpoint}/${userId}`);
  }

  public create(data): Observable<any> {
    return this.http.post<any>(this.endpoint, data);
  }

  public update(userId:number, data): Observable<any> {
    return this.http.put(`${this.endpoint}/${userId}`,data);
  }

  public delete(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}/${userId}`);
  }
}
