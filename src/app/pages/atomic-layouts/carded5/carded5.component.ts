import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-layout-carded5',
    templateUrl: './carded5.component.html'
})
export class LayoutCarded5Component implements OnInit {

    leftSidenavOpened: boolean = true;

    constructor() {
    }


    toggleLeftSidenav() {
        this.leftSidenavOpened = !this.leftSidenavOpened;
    }


    ngOnInit() {

    }
}
