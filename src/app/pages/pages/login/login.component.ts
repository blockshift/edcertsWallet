import {Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

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
