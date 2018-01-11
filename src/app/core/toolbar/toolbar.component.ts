import {AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Router} from '@angular/router';
import {SettingsService} from '../settings/shared/settings';
import {AtLayoutComponent} from "@atomic/core";
import { AuthService } from 'app/services/auth.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, AfterViewInit {


    @Input('sidenav') sidenav: any;
    @Input('sidepanel') sidepanel: any;

    @Input('layoutRef') layoutRef: AtLayoutComponent;

    @ViewChildren('userButton') userButton: QueryList<ElementRef>;
    _userButtonWidth: any;

    get userButtonWidth() {
        return this._userButtonWidth ? `${this._userButtonWidth}px` : '0';
    }

    activeSettings: any;

    constructor(private router: Router, public settings: SettingsService, private auth :AuthService ) {
        this.activeSettings = settings.active;
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        // Wait for DOM rendering
        setTimeout(() => {
            this._userButtonWidth = this.userButton.first.nativeElement.clientWidth;
        }, 1);
    }

    onAtFavoritesChange(atSidenavItems) {
        // Add your method to save favorites here...
    }

logout(){
    this.auth.setUserLoggedOut();
this.router.navigate(['login']);
}

}
