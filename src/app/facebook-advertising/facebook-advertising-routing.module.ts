import { FacebookAdvertisingAccountListComponent } from './facebook-advertising-account-list/facebook-advertising-account-list.component';
import { FacebookAdvertisingComponent } from './facebook-advertising.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: FacebookAdvertisingComponent,
        children: [
            {
                path: 'facebook-advertising-account-list',
                component: FacebookAdvertisingAccountListComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FacebookAdvertisingRoutingModule { }
