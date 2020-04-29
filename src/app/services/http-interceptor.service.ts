import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { of, from } from 'rxjs';
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): import('rxjs').Observable<HttpEvent<any>> {
    console.log('request sent');
    if (req.url.endsWith('courses')) {
      return of(
        new HttpResponse({ status: 200, body: from(this.getCourses()) })
      );
    }
    next.handle(req);
    return next.handle(req);
  }

  getCourses() {
    return [];
  }
}
