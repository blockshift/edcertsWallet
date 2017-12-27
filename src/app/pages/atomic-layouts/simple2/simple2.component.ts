import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-layout-simple2',
    templateUrl: './simple2.component.html'
})
export class LayoutSimple2Component implements OnInit {

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
