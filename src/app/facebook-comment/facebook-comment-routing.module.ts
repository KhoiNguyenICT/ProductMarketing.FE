import { FacebookCommentComponent } from './facebook-comment.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacebookCommentListComponent } from './facebook-comment-list/facebook-comment-list.component';

const routes: Routes = [
    {
        path: '',
        component: FacebookCommentComponent,
        children: [
            {
                path: 'facebook-comment-list',
                component: FacebookCommentListComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FacebookCommentRoutingModule { }
