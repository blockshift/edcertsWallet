import {Component, OnInit} from '@angular/core';
import {matColors} from './colors.data';

@Component({
    selector: 'app-colors',
    templateUrl: './colors.component.html',
})
export class ColorsComponent implements OnInit {
    matColors: any;

    constructor() {
        this.matColors = matColors;
    }

    ngOnInit() {
    }
}
