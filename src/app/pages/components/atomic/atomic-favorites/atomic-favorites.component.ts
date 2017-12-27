import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-aviator-favorites',
    templateUrl: './atomic-favorites.component.html'
})
export class AtomicFavoritesComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }

    onAtFavoritesChange(fav) {
        console.log(fav)
    }
}
