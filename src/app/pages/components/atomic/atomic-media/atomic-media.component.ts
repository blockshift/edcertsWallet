import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {AtMediaService} from '@atomic/core';

@Component({
    selector: 'app-aviator-media',
    templateUrl: './atomic-media.component.html'
})
export class AtomicMediaComponent implements OnInit, OnDestroy {

    mediaDemo: any[] = [{
        query: 'xs',
        value: false,
    }, {
        query: 'gt-xs',
        value: false,
    }, {
        query: 'sm',
        value: false,
    }, {
        query: 'gt-sm',
        value: false,
    }, {
        query: 'md',
        value: false,
    }, {
        query: 'gt-md',
        value: false,
    }, {
        query: 'lg',
        value: false,
    }, {
        query: 'gt-lg',
        value: false,
    }, {
        query: 'xl',
        value: false,
    }, {
        query: 'landscape',
        value: false,
    }, {
        query: 'portrait',
        value: false,
    }, {
        query: 'print',
        value: false,
    }, {
        query: '(max-width: 800px)',
        value: false,
    }, {
        query: '(min-width: 700px)',
        value: false,
    }];

    private _subcriptions: Subscription[] = [];
    private _querySubscription: Subscription;

    isNotSmallScreen = false;

    constructor(private _mediaService: AtMediaService, private _ngZone: NgZone) {

    }


    watchScreen(): void {
        this._querySubscription =
            this._mediaService.registerQuery('gt-sm').subscribe((matches: boolean) => {
                this._ngZone.run(() => {
                    this.isNotSmallScreen = matches;
                });
            });
    }

    ngOnInit(): void {
        for (let demoObj of this.mediaDemo) {
            this._ngZone.run(() => {
                demoObj.value = this._mediaService.query(demoObj.query);
            });
            this._subcriptions.push(this._mediaService.registerQuery(demoObj.query)
                .subscribe((matches: boolean) => {
                this._ngZone.run(() => {
                    demoObj.value = matches;
                });
            }));
            this.watchScreen();
        }
    }

    ngOnDestroy(): void {
        this._subcriptions.forEach((subs: Subscription) => {
            subs.unsubscribe();
        });
    }
}
