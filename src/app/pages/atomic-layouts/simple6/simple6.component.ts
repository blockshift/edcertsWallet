import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-layout-simple6',
    templateUrl: './simple6.component.html'
})
export class LayoutSimple6Component implements OnInit {

    rigthtSidenavOpened: boolean = true;

    constructor() {
    }

    toggleRigthSidenav() {
        this.rigthtSidenavOpened = !this.rigthtSidenavOpened;
    }


    ngOnInit() {

    }
}
