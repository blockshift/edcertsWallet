import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-helpers-text',
    templateUrl: './helpers-text.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpersTextComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}
