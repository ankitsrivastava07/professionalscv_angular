import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, finalize } from 'rxjs';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-req-interceptor',
  templateUrl: './req-interceptor.component.html',
  styleUrls: ['./req-interceptor.component.css']
})

@Injectable()
export class ReqInterceptorComponent implements HttpInterceptor{

  constructor(private route: Router, private loadingService: LoadingService) {}
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = req.clone({
      headers: new HttpHeaders({
        'sessionToken': '' + sessionStorage.getItem('sessionToken')
      })
    });
    this.loadingService.isLoading.next(true);

    return next.handle(authReq).pipe(
      finalize(
        () => {
          this.loadingService.isLoading.next(false);
        }
      )
     ).pipe(catchError((err: any) => {

      this.loadingService.isLoading.next(false);

      if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
              console.log('Unauthorized error');
              this.route.navigate(['/signin'])
          }

          if (err.status === 0) {
            console.log('Unauthorized error');
            this.route.navigate(['/signin'])
        }
      }

    return new Observable<HttpEvent<any>>();
  }))
}

}
