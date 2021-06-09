import { Injectable , INJECTOR} from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { JwtService } from './../services';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()


export class HttpTokenInterceptor implements HttpInterceptor{
  constructor(private JwtService: JwtService){}


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig :any= {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const token = this.JwtService.getToken();
    if (token) {
      headersConfig['Authorization'] = `Token ${token}`;
    }

    const request = req.clone({setHeaders: headersConfig  });
    return next.handle(request);
  }

}

