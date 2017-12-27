import {Component, OnInit} from '@angular/core';
import {IPageChangeEvent} from '@atomic/core/';

@Component({
    selector: 'app-aviator-paging',
    templateUrl: './atomic-paging.component.html'
})
export class AtomicPagingComponent implements OnInit {
    pageSize = 50;
    event: IPageChangeEvent;
    firstLast: boolean = false;

    constructor() {

    }

    ngOnInit() {

    }

    change(event: IPageChangeEvent): void {
        this.event = event;
    }

    toggleFirstLast(): void {
        this.firstLast = !this.firstLast;
    }
}
