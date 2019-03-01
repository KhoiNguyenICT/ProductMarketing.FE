import { Directive, Input, OnChanges } from '@angular/core';
import { PageTitleService } from './page-title.service';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[pageTitle]'
})
export class PageTitleDirective implements OnChanges {
    // tslint:disable-next-line:no-input-rename
    @Input('pageTitle') pageTitle: string;

    constructor(private pageTitleService: PageTitleService) { }

    ngOnChanges() {
        this.pageTitleService.setTitle(this.pageTitle);
    }

}
