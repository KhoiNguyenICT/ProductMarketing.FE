import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { AccountModule } from '../account/account.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AccountModule
  ]
})
export class MainModule { }
