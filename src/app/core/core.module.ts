import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title/page-title.component';
import { AppConfig } from './app-config';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from './interceptor.service';
import { BreadcrumbService } from './breadcrumb/breadcrumb.service';
import { SessionService } from './session.service';
import { EventBusService } from './event-bus/event-bus.service';
import { PageTitleService } from './page-title/page-title.service';
import { PageTitleDirective } from './page-title/page-title.directive';
import { BreadcrumbTrackerDirective } from './breadcrumb/breadcrumb-tracker.directive';

@NgModule({
  declarations: [
    PageTitleComponent,
    PageTitleDirective,
    BreadcrumbTrackerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageTitleComponent,
    PageTitleDirective,
    BreadcrumbTrackerDirective
  ]
})
export class CoreModule {
  static forRoot(config: AppConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [{
        provide: AppConfig,
        useValue: config
      }, {
        provide: HTTP_INTERCEPTORS,
        useClass: AppHttpInterceptor,
        multi: true
      },
      BreadcrumbService,
      EventBusService,
      PageTitleService,
      SessionService,
    ]};
  }
}
