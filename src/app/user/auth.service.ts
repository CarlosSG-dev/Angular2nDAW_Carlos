import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = '/assets/users.json';
  authUser(user: User): Observable<User>{
    return this.http.get<User>(this.url)
    .pipe(map(u=> {u['passwd'] = user.passwd;
    localStorage.setItem('token',u.token);
    return u}));
  }
  
}

