import { FacebookCommentRoutingModule } from './facebook-comment-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookCommentComponent } from './facebook-comment.component';
import { FacebookCommentListComponent } from './facebook-comment-list/facebook-comment-list.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    FacebookCommentComponent,
    FacebookCommentListComponent
  ],
  imports: [
    CommonModule,
    FacebookCommentRoutingModule,
    NgZorroAntdModule
  ]
})
export class FacebookCommentModule { }
