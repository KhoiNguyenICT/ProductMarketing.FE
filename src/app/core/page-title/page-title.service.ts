import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class PageTitleService {

    private suffix = 'Product Marketing';

    constructor(
        private titleService: Title,
    ) { }

    get title() {
        return this.titleService.getTitle();
    }

    setTitle(newTitle: string) {
        this.titleService.setTitle([newTitle, this.suffix].filter(t => !!t).join(' - '));
    }

}
