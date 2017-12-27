import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-aviator-search',
    templateUrl: './atomic-search.component.html'
})
export class AtomicSearchComponent implements OnInit {

    eSearchInputTerm: string = '';
    dSearchInputTerm: string = '';

    cAlwaysVisible = false;
    cSearchBoxTerm: string = '';

    constructor() {

    }

    ngOnInit() {

    }
}
