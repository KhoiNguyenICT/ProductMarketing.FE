import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { AccountProfileComponent } from './account-profile/account-profile.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    AccountComponent,
    AccountProfileComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    CoreModule
  ]
})
export class AccountModule { }
