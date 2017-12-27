import {Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

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
