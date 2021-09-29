import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    let username ='rupesh'
    let password = 'rupesh'
    let basicAuth = 'Basic' + window.btoa(username+':'+password);

    let request2 = req.clone({
      setHeaders : {
        Authorization : basicAuth
      }
    }  
    )

    return next.handle(request2);

  }

  constructor() { }
}
