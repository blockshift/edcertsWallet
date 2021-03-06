import {Subscription} from 'rxjs';
import {Component, OnInit, ViewEncapsulation, OnDestroy, AfterViewInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {AtSidenavService, AtBreadcrumbService, AtSidenavItem, AtScrollbarService} from '@atomic/core';
import {SettingsService} from '../settings/shared/settings';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [AtScrollbarService]
})
export class SidenavComponent implements OnInit, AfterViewInit, OnDestroy {

    atSidenavItems: AtSidenavItem[] = [];

    private atSidenavItemsChange: Subscription;
    private routerEventsChange: Subscription;
    private avSidenavCurrentlyOpenChange: Subscription;

    backdrop: HTMLElement;
    activeSettings: any;

    // Todo Change all Setup to core component

    constructor(private avSidenavService: AtSidenavService,
                private avScrollbarService: AtScrollbarService,
                public router: Router,
                private breadcrumb: AtBreadcrumbService,
                public settings: SettingsService) {

        this.activeSettings = settings.active;

        if (this.avSidenavService.getAtSidenavItems().length === 0) {

            avSidenavService.buildMenuByRoutes(router.config);

            // let pages = avSidenavService.addItem(
            //     new AtSidenavItem({
            //         name: '',
            //         //icon: 'description',
            //         route: '/pages',
            //         position: 1,
            //     }));

          //  avSidenavService.addChild(pages, new AtSidenavItem({name: 'Login', route: '/pages/login', position: 1}));
            // avSidenavService.addChild(pages, new AtSidenavItem({
            //     name: 'Register',
            //     route: '/pages/register',
            //     position: 1
            // }));
            // avSidenavService.addChild(pages, new AtSidenavItem({
            //     name: 'Forgot Password',
            //     route: '/pages/forgot-pass',
            //     position: 1
            // }));

            // let parent = avSidenavService.addItem(
            //     new AtSidenavItem({
            //         name: 'level 1',
            //         icon: 'add',
            //         route: '/l1',
            //         position: 2,
            //     }));

            // let child = avSidenavService.addChild(parent, new AtSidenavItem({
            //     name: 'level 2',
            //     route: '/l2',
            //     position: 1
            // }));
            // child = avSidenavService.addChild(child, new AtSidenavItem({name: 'level 3', route: '/l3', position: 1}));
            // child = avSidenavService.addChild(child, new AtSidenavItem({name: 'level 4', route: '/l4', position: 1}));
            // avSidenavService.addChild(child, new AtSidenavItem({name: 'level 5', route: '/l5', position: 1}));
        }


    }

    /**
     * Open AtsidenavItem based on the route
     * @param route
     */
    private openAtsidenavItem(route: string) {
        this.avSidenavService.openAtSidenavItemByRoute(route);
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 400);
    }

    /**
     * AtBreadcrumb initial setup
     * @param items
     */
    private initAtBreadcrumb(items: AtSidenavItem[]) {
        items.forEach(item => {
            this.breadcrumb.addFriendlyNameForRoute(item.route, item.name);
        });
    }

    /**
     * Makes the sidenav collapsible or pinned. When sidenav is collapsible
     * the user gain more screen space, because the sidenav only shows item icons.
     * When the user hover the sidenav it shows again items names and descriptions.
     */
    toggleSidenavCollapsed() {
        this.backdrop = <HTMLElement>document.getElementsByClassName('mat-sidenav-backdrop')[0];
        this.backdrop.style.display = '';
        this.avSidenavService.isSidenavCollapsed = !this.avSidenavService.isSidenavCollapsed;
        this.avSidenavService.toggleSidenavChanged(true);
    }

    /**
     * True if sidenav is collapsed
     * @returns {boolean}
     */
    isSidenavCollapsed(): boolean {
        return this.avSidenavService.isSidenavCollapsed;
    }

    ngOnInit() {

        // let timer = Observable.timer(6000, 3000);
        // timer.subscribe(t => {
        //     const r = Math.floor(Math.random() * 20) + 1;
        //
        //     let color: string = '#8BC34A';
        //
        //     if (r < 15) {
        //         color = '#F57C00'
        //     }
        //     if (r < 10) {
        //         color = '#D32F2F'
        //     }
        //
        //     this.avSidenavService.updateItem('/dashboards', null, r.toString(), color);
        // });

        this.openAtsidenavItem(this.router.url);

        this.atSidenavItemsChange = this.avSidenavService.atSidenavItemsChange
            .subscribe((atSidenavItems: AtSidenavItem[]) => {
                this.atSidenavItems = this.avSidenavService.sortAtSidenavItems(atSidenavItems, 'position');
                setTimeout(() => {
                    this.initAtBreadcrumb(this.avSidenavService.flattenTree());
                })
            });


        // Every time route changes it's necessary open the correct AtSidenavItem parent
        this.routerEventsChange = this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.openAtsidenavItem(event.url)
            }
        });
    }

    ngAfterViewInit() {
        // force scrollbar sync when sidenav items are toggled
        this.avSidenavCurrentlyOpenChange = this.avSidenavService.avSidenavCurrentlyOpenChange.subscribe(() => {
            let sb = this.avScrollbarService.getInstance('avSidenavScrollbar');
            sb.update(true);
        });
    }

    ngOnDestroy() {
        this.avSidenavCurrentlyOpenChange.unsubscribe();
        this.atSidenavItemsChange.unsubscribe();
        this.routerEventsChange.unsubscribe();
    }
}
