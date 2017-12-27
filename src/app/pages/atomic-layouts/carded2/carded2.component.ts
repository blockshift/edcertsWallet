import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-layout-carded2',
    templateUrl: './carded2.component.html'
})
export class LayoutCarded2Component implements OnInit {

    leftSidenavOpened: boolean = true;
    rigthtSidenavOpened: boolean = true;

    constructor() {
    }


    toggleLeftSidenav() {
        this.leftSidenavOpened = !this.leftSidenavOpened;
    }

    toggleRigthSidenav() {
        this.rigthtSidenavOpened = !this.rigthtSidenavOpened;
    }


    ngOnInit() {

    }
}
