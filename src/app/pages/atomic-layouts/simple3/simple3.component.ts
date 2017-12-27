import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-layout-simple3',
    templateUrl: './simple3.component.html'
})
export class LayoutSimple3Component implements OnInit {

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
