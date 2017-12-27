import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-layout-simple5',
    templateUrl: './simple5.component.html'
})
export class LayoutSimple5Component implements OnInit {

    leftSidenavOpened: boolean = true;

    constructor() {
    }


    toggleLeftSidenav() {
        this.leftSidenavOpened = !this.leftSidenavOpened;
    }


    ngOnInit() {

    }
}
