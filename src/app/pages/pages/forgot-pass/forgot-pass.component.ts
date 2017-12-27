import {Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-forgot-pass',
    templateUrl: './forgot-pass.component.html',
    styleUrls: ['./forgot-pass.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ForgotPassComponent implements OnInit {

    selectedValue: string = '1';

    languages = [
        {value: '1', viewValue: 'English (United States)'},
        {value: '2', viewValue: 'Spanish'}
    ];

    constructor() {
    }

    ngOnInit() {
    }
}
