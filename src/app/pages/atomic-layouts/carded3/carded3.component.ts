import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-layout-carded3',
    templateUrl: './carded3.component.html'
})
export class LayoutCarded3Component implements OnInit {

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
