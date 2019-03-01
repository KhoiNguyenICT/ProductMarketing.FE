import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookPageComponent } from './facebook-page.component';
import { FacebookPageListComponent } from './facebook-page-list/facebook-page-list.component';
import { FacebookPageRoutingModule } from './facebook-page-routing.module';

@NgModule({
  declarations: [
    FacebookPageComponent,
    FacebookPageListComponent
  ],
  imports: [
    CommonModule,
    FacebookPageRoutingModule
  ]
})
export class FacebookPageModule { }
