import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-layout-simple1',
    templateUrl: './simple1.component.html'
})
export class LayoutSimple1Component implements OnInit {

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
