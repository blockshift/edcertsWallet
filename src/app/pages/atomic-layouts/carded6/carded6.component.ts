import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-layout-carded6',
    templateUrl: './carded6.component.html'
})
export class LayoutCarded6Component implements OnInit {

    rigthtSidenavOpened: boolean = true;

    constructor() {
    }

    toggleRigthSidenav() {
        this.rigthtSidenavOpened = !this.rigthtSidenavOpened;
    }


    ngOnInit() {

    }
}
