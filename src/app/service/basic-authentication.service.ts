import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app.constants';
import { map } from 'rxjs/operators';


export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) { }

  executeJWTAuthenticationService(username: string, password: string) {

    return this.http.post<any>(
      `${API_URL}/login`, {
      username,
      password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );
    //console.log("Execute Hello World Bean Service")
  }
}
