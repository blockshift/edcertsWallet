import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {MdIconsService} from '../../../core/shared/md-icons';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';

@Component({
    selector: 'app-icons',
    templateUrl: './icons.component.html'
})
export class IconsComponent implements OnInit, OnDestroy {

    mdIcons: any;
    filteredIcons: Observable<any[]>;
    columns = 7;

    private screenWatcher: Subscription;
    private activeMediaQuery = '';

    constructor(private mdIconsService: MdIconsService, private media: ObservableMedia) {

    }

    ngOnInit() {
        this.mdIcons = this.mdIconsService.getIcons();

        this.filteredIcons = this.mdIcons;

        if (this.media.isActive('xs')) {
            this.columns = 2;
        }

        if (this.media.isActive('sm')) {
            this.columns = 3;
        }

        if (this.media.isActive('md')) {
            this.columns = 4;
        }

        if (this.media.isActive('lg')) {
            this.columns = 6;
        }


        this.screenWatcher = this.media.subscribe((change: MediaChange) => {
            this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
            switch (change.mqAlias) {
                case 'xs':
                    this.columns = 2;
                    break;
                case 'sm':
                    this.columns = 3;
                    break;
                case 'md':
                    this.columns = 4;
                    break;
                case 'lg':
                    this.columns = 6;
                    break;
                default:
                    this.columns = 7;
            }
        });
    }

    ngOnDestroy() {
        this.screenWatcher.unsubscribe();
    }

    searchIcon(term) {
        this.filteredIcons = term ? this.filterIcons(term) : this.mdIcons;
    }

    filterIcons(label: string) {
        return this.mdIcons.filter(icon =>
            icon.label.toLowerCase().includes(label.toLowerCase()))
    }
}
