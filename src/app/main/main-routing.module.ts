import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'account',
        loadChildren: '../account/account.module#AccountModule'
      },
      {
        path: 'facebook-advertising',
        loadChildren: '../facebook-advertising/facebook-advertising.module#FacebookAdvertisingModule'
      },
      {
        path: 'facebook-comment',
        loadChildren: '../facebook-comment/facebook-comment.module#FacebookCommentModule'
      },
      {
        path: 'facebook-page',
        loadChildren: '../facebook-page/facebook-page.module#FacebookPageModule'
      },
      {
        path: 'contact',
        loadChildren: '../contact/contact.module#ContactModule'
      },
      {
        path: 'dashboard',
        loadChildren: '../dashboard/dashboard.module#DashboardModule'
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
