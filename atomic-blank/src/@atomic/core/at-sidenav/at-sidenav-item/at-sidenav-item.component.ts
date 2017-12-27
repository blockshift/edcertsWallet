import {Component, OnInit, ViewEncapsulation, HostBinding, Input} from '@angular/core';
import {AtSidenavItem} from './at-sidenav-item.model';
import {AtSidenavService} from '../at-sidenav.service';

@Component({
    selector: 'at-sidenav-item',
    templateUrl: './at-sidenav-item.component.html',
    styleUrls: ['./at-sidenav-item.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AtSidenavItemComponent implements OnInit {

    @Input('item')
    item: AtSidenavItem;

    @HostBinding('class.open')
    get isOpen() {
        return this.sidenavService.isOpen(this.item);
    }

    @HostBinding('class.at-sidenav-item') AtSidenavService: boolean = true;

    constructor(private sidenavService: AtSidenavService) {
    }

    ngOnInit() {
        // console.log(this.item)
    }

    /**
     * Open | Close a Parent Sidenav Item
     */
    toggleAtSidenavItem(): void {
        this.sidenavService.toggleCurrentlyOpen(this.item);
    }

    /**
     * Draw SubNavItems
     * @param items
     * @returns {boolean}
     */
    renderSubNav(items: AtSidenavItem[]): boolean {
        for (let item of items) {
            if (item.renderItem) {
                return true;
            }
        }

        return false;
    }

    /**
     * Returns true if the item can be rendered
     * @param item
     * @returns {boolean}
     */
    renderItem(item: AtSidenavItem) {
        if (!item.parent) {
            return true;
        }

        if (item.parent && this.sidenavService.isOpen(item.parent)) {
            return true;
        }

        return false;
    }

    /**
     * Get the amount of Open Children
     * @param item
     * @returns {number}
     */
    protected getOpenChildrenCount(item: AtSidenavItem): number {
        let count = 0;

        if (item.hasChildren() && this.sidenavService.isOpen(item) && this.renderSubNav(item.children)) {
            count += item.children.length;
            console.log('sidenavItem: ', item.name)

            item.children.forEach((child) => {
                console.log('sidenavItemChild: ', child.name)
                count += this.getOpenChildrenCount(child);
            })
        }

        return count;
    }
}
