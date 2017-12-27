import {Component, Inject, OnInit} from '@angular/core';
import {SettingsService} from './shared/settings';
import * as _ from 'lodash';
import {DOCUMENT} from "@angular/common";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    options: any;
    active: any;

    selectedColor: any;

    constructor(public settings: SettingsService, @Inject(DOCUMENT) private document: Document) {
        this.options = this.settings.options;
        this.active = settings.active;
        this.selectedColor = this.active.toolbar.color.name;
    }

    ngOnInit() {
        this.setThemeColor();
    }

    setThemeColor() {
        this.options.themes.forEach(theme => {
            this.document.body.classList.remove(theme.className);
        });
        this.document.body.classList.add(this.active.theme.className);
    }

    changeThemeColor() {
        this.setThemeColor();
        this.saveSettings();
    }

    changeToolbarColors(colorName) {
        const sColorObj = _.find(this.options.mainToolbar.colors, ['name', colorName]);
        this.active.toolbar.color = sColorObj;
        this.saveSettings();
    }

    saveSettings() {
        this.settings.save();
    }
}
