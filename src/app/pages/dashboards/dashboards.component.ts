import {Subscription} from "rxjs/Subscription";
import {ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {dashboardData} from './crm.data';
import {AtMediaService} from "@atomic/core";


@Component({
    selector: 'app-crm',
    templateUrl: './dashboards.component.html',
    styleUrls: ['./dashboards.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DashboardsComponent implements OnInit, OnDestroy {
    view = [230, 230];

    colorScheme = {
        domain: ['#9C27B0']
    };

    private querySubscription: Subscription;

    isMediumScreen = false;
    wasMediumScreen = false;
    snOpened = true;

    dashboardData: any;

    @ViewChild('dashboardLayout') dashboardLayout;

    constructor(private mediaService: AtMediaService,
                private ngZone: NgZone,
                private changeDetectorRef: ChangeDetectorRef) {
        this.dashboardData = dashboardData;
    }

    getPercent(x) {
        return x + '%'
    }

    ngOnInit() {
        this.querySubscription =
            this.mediaService.registerQuery('gt-lg').subscribe((matches: boolean) => {
                this.ngZone.run(() => {
                    this.isMediumScreen = !matches;

                    if (this.isMediumScreen !== this.wasMediumScreen) {
                        this.wasMediumScreen = this.isMediumScreen;

                        this.snOpened = !this.isMediumScreen;
                        this.dashboardLayout.updateView();
                    }
                });
            });
    }

    toggleSidenav(value) {
        this.snOpened = value;
        this.dashboardLayout.updateView();
    }

    ngOnDestroy(): void {
        this.querySubscription.unsubscribe();
    }
}
