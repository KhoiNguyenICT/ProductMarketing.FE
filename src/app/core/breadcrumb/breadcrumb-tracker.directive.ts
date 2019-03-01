import { Directive, OnInit, OnDestroy, Input } from '@angular/core'
import { BreadcrumbService } from './breadcrumb.service'
import { v4 } from 'uuid'
import { BreadcrumbItem } from 'src/types';

@Directive({
    selector: '[breadcrumbTracker]'
})
export class BreadcrumbTrackerDirective implements OnInit, OnDestroy {
    @Input('breadcrumbTracker') set crumbItem(item: BreadcrumbItem) {
        Object.assign(this._crumbItem, item)
        this.push()
    }

    @Input() set label(value: string) {
        this._crumbItem.label = value
        this.push()
    }

    @Input() set route(value: any) {
        this._crumbItem.route = value
        this.push()
    }

    @Input() set object(crumbs: BreadcrumbItem[]) {
        if (crumbs && crumbs.length) {
            crumbs.forEach(t => {
                t.id = v4()
                this._crumbSetItems.push(t)
            })
            this.push()
        }
    }

    private _crumbItem = {
        id: v4()
    } as BreadcrumbItem

    private _crumbSetItems: BreadcrumbItem[] = []

    constructor(private breadcrumbService: BreadcrumbService) { }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.breadcrumbService.pop(this._crumbItem)
        this._crumbSetItems.forEach(t => {
            this.breadcrumbService.pop(t)
        })
    }

    private push() {
        this.breadcrumbService.push(this._crumbItem)
        this._crumbSetItems.forEach(t => {
            this.breadcrumbService.push(t)
        })
    }

}
