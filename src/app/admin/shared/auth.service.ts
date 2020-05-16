import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User} from './interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { FbAuthResponse } from 'src/environments/interface';

@Injectable()
export class AuthService {
     
  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(tap(this.setToken))
  }

  logout() {

  }
  isAuthenticated():boolean {
    return !!this.token;
  }

  get token():string {
    return '';

  }

  private setToken(response: FbAuthResponse) {
    console.log('All Response: ', response);
    console.log('IdToken: ', response.idToken);
    
  }



}
