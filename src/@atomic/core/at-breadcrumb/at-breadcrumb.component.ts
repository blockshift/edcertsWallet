import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {AtBreadcrumbService} from './at-breadcrumb.service';

@Component({
    selector: 'at-breadcrumbs',
    templateUrl: './at-breadcrumb.component.html',
    styleUrls: ['./at-breadcrumb.component.scss']
})
export class AtBreadcrumbsComponent implements OnInit, OnChanges {

    @Input('prefix')
    prefix:string = '';

    urls:string[];
    private _routerSubscription:any;

    constructor(private router:Router,
                private breadcrumbService:AtBreadcrumbService) {
    }

    ngOnInit():void {
        this.urls = [];

        if (this.prefix.length > 0) {
            this.urls.unshift(this.prefix);
        }

        this.generateBreadcrumbTrail(this.router.url);

        this._routerSubscription = this.router.events.subscribe((navigation) => {
            this.urls.length = 0; //Fastest way to clear out array
            if (navigation instanceof NavigationEnd)
                this.generateBreadcrumbTrail(navigation.urlAfterRedirects ? navigation.urlAfterRedirects : navigation.url);
        });
    }

    ngOnChanges():void {
        if (!this.urls) {
            return;
        }

        this.urls.length = 0;
        this.generateBreadcrumbTrail(this.router.url);
    }

    generateBreadcrumbTrail(url:string):void {
        if (!this.breadcrumbService.isRouteHidden(url)) {
            //Add url to beginning of array (since the url is being recursively broken down from full url to its parent)
            this.urls.unshift(url);
        }

        if (url.lastIndexOf('/') > 0) {
            this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/'))); //Find last '/' and add everything before it as a parent route
        } else if (this.prefix.length > 0) {
            this.urls.unshift(this.prefix);
        }
    }

    navigateTo(url:string):void {
        this.router.navigateByUrl(url);
    }

    friendlyName(url:string):string {
        return !url ? '' : this.breadcrumbService.getFriendlyNameForRoute(url);
    }

    ngOnDestroy():void {
        this._routerSubscription.unsubscribe();
    }

}
