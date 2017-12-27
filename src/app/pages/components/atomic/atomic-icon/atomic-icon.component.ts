import {Component} from '@angular/core';
import * as _ from 'lodash'
import {MdIconsService} from '../../../../core/shared/md-icons';

@Component({
    selector: 'app-aviator-icon',
    templateUrl: './atomic-icon.component.html'
})
export class AtomicIconComponent {

    avIconForm = {
        type: 'mdicon',
        name: 'dashboard',
        backgroundType: 'solid',
        backgroundColor: 'red',
        size: '120px',
        fontSize: '42px'
    };
    backColors = [
        'none',
        'auto',
        'red',
        'pink',
        'purple',
        'yellow',
        'indigo',
        'blue',
        'light-blue',
        'cyan',
        'teal',
        'green',
        'light-green',
        'orange',
        'blue-grey'
    ];
    mdIcons: any;

    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    randomIcons: string[] = [];

    constructor(private mdIconsService: MdIconsService) {
        this.mdIcons = this.mdIconsService.getIcons();

        for (let i = 0; i < 26; i++) {
            this.randomIcons.push(this.mdIcons[_.random(0, 923)])
        }
    }

    sizeChange(MdSliderChange) {
        this.avIconForm.size = MdSliderChange.value + 'px';
    }

    fontSizeChange(MdSliderChange) {
        this.avIconForm.fontSize = MdSliderChange.value + 'px';
    }
}
