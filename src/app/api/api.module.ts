import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { BaseApi } from './base-api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ApiModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        BaseApi,
      ],
    }
  }
}
