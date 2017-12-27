import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-helpers',
    templateUrl: './helpers.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpersComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}
