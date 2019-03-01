import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookAdvertisingComponent } from './facebook-advertising.component';
import { FacebookAdvertisingAccountListComponent } from './facebook-advertising-account-list/facebook-advertising-account-list.component';
import { FacebookAdvertisingRoutingModule } from './facebook-advertising-routing.module';

@NgModule({
  declarations: [
    FacebookAdvertisingComponent,
    FacebookAdvertisingAccountListComponent
  ],
  imports: [
    CommonModule,
    FacebookAdvertisingRoutingModule
  ]
})
export class FacebookAdvertisingModule { }
