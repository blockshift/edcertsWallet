import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-layout-sidenav',
    templateUrl: './content-sidenav.component.html',
})
export class LayoutContentSidenavComponent implements OnInit {

    links: any[] = [
        {name: 'LisItem', icon: 'folder'},
        {name: 'LisItem', icon: 'folder'},
        {name: 'LisItem', icon: 'folder'},
        {name: 'LisItem', icon: 'folder'},
        {name: 'LisItem', icon: 'folder'},
        {name: 'LisItem', icon: 'folder'},
        {name: 'LisItem', icon: 'folder'},
        {name: 'LisItem', icon: 'folder'},
        {name: 'LisItem', icon: 'folder'},
        {name: 'LisItem', icon: 'folder'},
        {name: 'LisItem', icon: 'folder'},
        {name: 'LisItem', icon: 'folder'},
        {name: 'LisItem', icon: 'folder'},
        {name: 'LisItem', icon: 'folder'},
    ];

    constructor() {
    }

    ngOnInit() {
    }
}
