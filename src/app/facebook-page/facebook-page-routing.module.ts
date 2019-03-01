import { FacebookPageListComponent } from './facebook-page-list/facebook-page-list.component';
import { FacebookPageComponent } from './facebook-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: FacebookPageComponent,
        children: [
            {
                path: 'facebook-page-list',
                component: FacebookPageListComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FacebookPageRoutingModule { }
