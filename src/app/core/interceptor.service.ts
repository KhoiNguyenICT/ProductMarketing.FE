import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EventType } from 'src/types';
import { EventBusService } from './event-bus/event-bus.service';
import { SessionService } from './session.service';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

    constructor(
        private eventBusService: EventBusService,
        private router: Router,
        private sessionService: SessionService,
        private toarts: ToastrService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = this.sessionService.accessToken;
        const headers = new HttpHeaders({
            Accept: 'application/json',
            Authorization: accessToken ? `Bearer ${accessToken}` : '',
            'Content-Type': req.headers.has('Content-Type') ? req.headers.get('Content-Type') : 'application/json',
        });
        req = req.clone({ headers });

        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                if (event.url.indexOf('error/401') > -1) {
                    this.eventBusService.emit({ type: EventType.error401 });
                }
            }
        }, error => {
            if (error instanceof HttpErrorResponse) {
                switch (error.status) {
                    case 0:
                        this.handle0Status();
                        break;

                    case 400:
                        break;

                    case 401:
                        this.eventBusService.emit({ type: EventType.error401 });
                        break;

                    case 403:
                        this.eventBusService.emit({ type: EventType.error403 });
                        break;

                    case 404:
                        this.router.navigate(['404']);
                        break;

                    default:
                        break;
                }
            }
        }));
    }

    private handle0Status() {
        const message = 'Không kết được với server';
        this.toarts.warning(message);
    }

}
