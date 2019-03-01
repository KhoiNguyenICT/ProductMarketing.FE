import { Injectable } from '@angular/core';
import { BreadcrumbItem } from 'src/types';

@Injectable()
export class BreadcrumbService {
    items: BreadcrumbItem[] = [];

    constructor() {
    }

    push(item: BreadcrumbItem) {
        if (!item || !item.label) {
            return;
        }
        const index = this.items.findIndex(t => t.id === item.id);
        if (index > -1) {
            Object.assign(this.items[index], item);
        } else {
            this.items = this.items.concat(item);
        }
    }

    pop(item: BreadcrumbItem) {
        if (!item) {
            return;
        }
        const index = this.items.findIndex(t => t.id === item.id);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

}
