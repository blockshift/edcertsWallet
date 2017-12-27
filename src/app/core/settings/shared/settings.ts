import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SettingsService {

    public options = {
        themes: [{
            name: 'light',
            className: 'at-theme-light',
        }, {
            name: 'dark',
            className: 'at-theme-dark',
        }],
        mainToolbar: {
            colors: [
                {
                    name: 'primary',
                    color: 'primary',
                    className: 'at-main-toolbar-primary',
                },
                {
                    name: 'transparent',
                    color: '',
                    className: 'at-main-toolbar-transparent',
                },
                {
                    name: 'light',
                    color: '',
                    className: 'at-main-toolbar-light',
                },
                {
                    name: 'dark',
                    color: '',
                    className: 'at-main-toolbar-dark',
                }
            ],
            positions: [{
                name: 'Inside Container',
                value: 'inside',
            }, {
                name: 'Outside Container',
                value: 'outside',
            }],
        },
        toolbar: {
            colors: [
                {
                    name: 'primary',
                    color: 'primary',
                    className: 'at-toolbar-primary',
                },
                {
                    name: 'transparent',
                    color: '',
                    className: 'at-toolbar-transparent',
                },
                {
                    name: 'light',
                    color: '',
                    className: 'at-toolbar-light',
                },
                {
                    name: 'dark',
                    color: '',
                    className: 'at-toolbar-dark',
                }
            ],
        },
        sidenav: {
            sizes: [
                {
                    name: 'small',
                    className: 'default',
                },
                {
                    name: 'medium',
                    className: 'medium',
                },
                {
                    name: 'large',
                    className: 'large',
                }
            ],
            headerTypes: [
                {
                    name: 'toolbar',
                },
                {
                    name: 'custom',
                },
            ],
            headerTypeCustomMixes: [
                {
                    name: 'brand',
                },
                {
                    name: 'user',
                },
            ]
        },
        elevations: [
            {
                name: 'No elevation',
                className: 'mat-no-elevation'
            },
            {
                name: 'level 1',
                className: 'z1'
            },
            {
                name: 'level 2',
                className: 'z2'
            },
            {
                name: 'level 3',
                className: 'z3'
            },
            {
                name: 'level 4',
                className: 'z4'
            },
            {
                name: 'level 5',
                className: 'z5'
            },
            {
                name: 'level 6',
                className: 'z6'
            },
            {
                name: 'level 7',
                className: 'z7'
            }

        ],
        patterns: [
            {
                name: 'No Pattern',
                className: 'no-pattern',
            },
            {
                name: 'Pattern 1',
                className: 'pattern-1',
            },
            {
                name: 'Pattern 2',
                className: 'pattern-2',
            },
            {
                name: 'Pattern 3',
                className: 'pattern-3',
            },
            {
                name: 'Pattern 4',
                className: 'pattern-4',
            }
        ]

    };

    private defaults = {
        theme: {
            name: 'light',
            className: 'at-theme-light'
        },
        toolbar: {
            color: {
                name: 'primary',
                color: 'primary',
                className: 'at-main-toolbar-primary',
            },
            elevation: 'mat-no-elevation',
            showFavorites: true,
            showBreadcrumbs: true,
            position: 'inside'
        },
        sidenav: {
            header: true,
            headerType: 'custom',
            headerTypeMix: 'brand',
            headerPin: true,
            headerToolbarColor: 'at-toolbar-primary',
            footer: true,
            footerPin: true,
            footerToolbarColor: 'at-main-toolbar-transparent',
            elevation: 'z1',
            size: 'default',
            pattern: 'no-pattern'
        }
    };

    active: any = {};

    private activeSource = new Subject<any>();
    activeChange = this.activeSource.asObservable();

    constructor() {
        this.active = JSON.parse(localStorage.getItem('_atomicDemo'));
        if (!this.active) {
            this.active = this.defaults;
        }
        // localStorage.setItem('_aviatorDemo', JSON.stringify(this.defaults));
    }

    save() {
        localStorage.setItem('_atomicDemo', JSON.stringify(this.active));
        this.activeSource.next(this.active)
    }


}