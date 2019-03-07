import { FacebookCommentComponent } from "./facebook-comment.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: FacebookCommentComponent
    // children: [
    //     {
    //         path: 'facebook-comment-list',
    //         component: FacebookCommentListComponent
    //     }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacebookCommentRoutingModule {}
