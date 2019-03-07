import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facebook-comment',
  templateUrl: './facebook-comment.component.html',
  styleUrls: ['./facebook-comment.component.scss']
})
export class FacebookCommentComponent implements OnInit {

  page = {
    title: "Facebook Comments"
  }
  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'nz-demo-tab-content-lazy',
  template: `lazy`
})
export class NzDemoTabContentLazyComponent implements OnInit {
  ngOnInit(): void {
    console.log(`I will init when tab active`);
  }
}

@Component({
  selector: 'nz-demo-tab-content-eagerly',
  template: `eagerly`
})
export class NzDemoTabContentEagerlyComponent implements OnInit {
  ngOnInit(): void {
    console.log(`I will init eagerly`);
  }
}
