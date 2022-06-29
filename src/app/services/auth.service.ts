import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(protected http: HttpClient) { }

  public login(data): Observable<any> {
    return this.http.post(`${environment.api}/login`,data);
  }

  public register(data) : Observable<User>{
    return this.http.post<User>(`${environment.api}/register`,data);
  }

  public user(): Observable<User> {
    return this.http.get<User>(`${environment.api}/user`);
  }

  public logout(): Observable<void> {
    return this.http.post<void>(`${environment.api}/logout`, {});
  }

  public updateInfo(data): Observable<User> {
    return this.http.put<User>(`${environment.api}/users/info`, data);
  }

  public updatePassword(data): Observable<User> {
    return this.http.put<User>(`${environment.api}/users/update-password`, data);
  }

}
