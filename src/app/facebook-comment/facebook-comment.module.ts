import { FacebookCommentRoutingModule } from './facebook-comment-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookCommentComponent } from './facebook-comment.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FacebookCommentAdsComponent } from './facebook-comment-ads/facebook-comment-ads.component';

@NgModule({
  declarations: [
    FacebookCommentComponent,
    FacebookCommentAdsComponent
  ],
  imports: [
    CommonModule,
    FacebookCommentRoutingModule,
    NgZorroAntdModule
  ]
})
export class FacebookCommentModule { }
