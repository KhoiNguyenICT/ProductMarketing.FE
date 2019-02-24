import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadScript('../../../assets/libs/app-menu.js');
    this.loadScript('../../../assets/libs/app.js');
    this.loadScript('../../../assets/libs/customizer.js');
    this.loadScript('../../../assets/libs/popper.js');
    this.loadScript('../../../assets/libs/bootstrap.js');
  }

  private loadScript(url) {
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
 }

}
