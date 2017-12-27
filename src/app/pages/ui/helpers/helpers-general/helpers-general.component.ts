import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-helpers-general',
    templateUrl: './helpers-general.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpersGeneralComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}
