import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  getToken(){
    return localStorage.getItem('jwtToken')
  }
  saveToken(token: string) {
    window.localStorage.setItem('jwtToken', token)
  }
  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }
}
