import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facebook-comment',
  templateUrl: './facebook-comment.component.html',
  styleUrls: ['./facebook-comment.component.scss']
})
export class FacebookCommentComponent implements OnInit {

  page = {
    title: "Facebook Comments",
    adsTabName:"Ads",
    postsTabName:"Posts"
  }
  constructor() { }

  ngOnInit() {
  }

}

