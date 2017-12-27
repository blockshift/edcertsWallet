import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {AtSidenavService} from '../at-sidenav/at-sidenav.service';
import {AtSidenavItem} from '../at-sidenav/at-sidenav-item/at-sidenav-item.model';
import {Subscription} from 'rxjs/Subscription';
import {SortablejsOptions} from 'angular-sortablejs';
import {Subject} from 'rxjs/Subject';

@Component({
    selector: 'at-favorites',
    templateUrl: './at-favorites.component.html',
    styleUrls: ['./at-favorites.component.scss']
})
export class AtFavoritesComponent implements OnInit, OnDestroy {

    /**
     * Selected Favorites routes for display in the first load
     * @type {Array}
     */
    @Input() avFavorites: string[] = [];

    /**
     * An Array of selected favorites routes
     * @type {EventEmitter<any>}
     */
    @Output() avFavoritesChange = new EventEmitter();

    private atSidenavItemsChange: Subscription;
    private initialSetup = true;

    /**
     * @internal only
     * @type {Array}
     */
    atSidenavItems: AtSidenavItem[] = [];

    /**
     * @internal only
     * @type {Array}
     */
    currentAtFavorites: AtSidenavItem[] = [];

    /**
     * @internal only
     */
    avFavSearchValue: string;

    /**
     * @internal only
     */
    avFavSearchValueChanged: Subject<string> = new Subject<string>();

    sortableOptions: SortablejsOptions = {
        animation: 200
    };

    constructor(private sidenavService: AtSidenavService) {
        this.avFavSearchValueChanged
            .subscribe(avFavSearchValue => {
                this.avFavSearchValue = avFavSearchValue
            });
    }

    ngOnInit() {
        this.atSidenavItemsChange = this.sidenavService.atSidenavItemsChange
            .subscribe((items: AtSidenavItem[]) => {
                this.atSidenavItems = items;
                let flattenItems = this.sidenavService.flattenTree();

                flattenItems.forEach((item) => {
                    if (this.avFavorites.length > 0 &&
                        this.avFavorites.find(route => item.route == route) &&
                        this.initialSetup &&
                        item.renderItem) {
                        if (!this.currentAtFavorites.includes(item)) {
                            this.currentAtFavorites.push(item);
                        }
                    }
                });

                if (this.atSidenavItems.length > 0)
                    this.initialSetup = false;
            });
    }

    private filterAtSidenavItems(arr, term) {
        let matches = [];
        if (!Array.isArray(arr)) return matches;

        arr.forEach((atSidenavItem) => {
            if (atSidenavItem.name.toLowerCase().includes(term.toLowerCase())) {
                if (!matches.includes(atSidenavItem) && atSidenavItem.renderItem) {
                    matches.push(atSidenavItem);
                }
            }
        });

        return matches;
    }

    private getAtFavorite(item: AtSidenavItem) {
        return item.route;
    }

    onAtFavSearchValueChanged(text: string) {
        this.avFavSearchValueChanged.next(text);
    }

    isAtFavorite(item: AtSidenavItem) {
        return (this.currentAtFavorites.indexOf(item) > -1);
    }

    toggleAtFavorite(item: AtSidenavItem) {
        let index = this.currentAtFavorites.indexOf(item);
        if (index > -1) {
            this.currentAtFavorites.splice(index, 1);
        } else {
            this.currentAtFavorites.push(item);
        }

        let avFavorites: string[] = [];
        this.currentAtFavorites.forEach(item => {
            avFavorites.push(this.getAtFavorite(item));
        });

        this.avFavoritesChange.emit(avFavorites);
    }

    clearSearchInput() {
        this.avFavSearchValue = '';
    }

    get avFavFilteredItems(): Array<AtSidenavItem> {
        if (this.avFavSearchValue) {
            let flat = this.sidenavService.flattenTree();
            return this.filterAtSidenavItems(flat, this.avFavSearchValue)
        } else {
            return this.currentAtFavorites;
        }
    }

    ngOnDestroy() {
        this.atSidenavItemsChange.unsubscribe();
    }
}
