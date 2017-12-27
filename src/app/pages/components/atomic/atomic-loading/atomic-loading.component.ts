import {Component, OnInit} from '@angular/core';
import {AtLoadingService, LoadingMode, LoadingType} from '@atomic/core';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/Subscriber';

@Component({
    selector: 'app-aviator-loading',
    templateUrl: './atomic-loading.component.html'
})
export class AtomicLoadingComponent implements OnInit {

    overlayStarSyntax: boolean = false;

    replaceDemo: any = {
        name: '',
        select: '',
        description: '',
    };

    listObservable: Observable<any[]>;


    constructor(private _loadingService: AtLoadingService) {
        this._loadingService.create({
            name: 'configFullscreenDemo',
            mode: LoadingMode.Indeterminate,
            type: LoadingType.Circular,
            color: 'accent',
            message: true
        });
    }

    ngOnInit(): void {
        this._loadingService.register('overlayStarSyntax');
        this.createObservableList();
        this.toggleReplaceTemplateSyntax();
    }

    toggleOverlayStarSyntax(): void {
        if (this.overlayStarSyntax) {
            this._loadingService.register('overlayStarSyntax');
        } else {
            this._loadingService.resolve('overlayStarSyntax');
        }
        this.overlayStarSyntax = !this.overlayStarSyntax;
    }

    toggleReplaceTemplateSyntax(): void {
        this._loadingService.register('replaceTemplateSyntax');
        let value: number = 0;
        let interval = setInterval(() => {
            this._loadingService.setValue('replaceTemplateSyntax', value);
            value = value + 10;
            if (value > 100) {
                clearInterval(interval);
            }
        }, 250);
        setTimeout(() => {
            this._loadingService.resolve('replaceTemplateSyntax');
        }, 3000);
    }

    createObservableList(): void {
        this.listObservable = new Observable<any[]>((subscriber: Subscriber<any[]>) => {
            setTimeout(() => {
                subscriber.next([
                    {label: 'Light', value: true},
                    {label: 'Console', value: false},
                    {label: 'T.V.', value: true}
                ]);
            }, 3000);
        });
    }

    toggleConfigFullscreenDemo(): void {
        this._loadingService.register('configFullscreenDemo');
        setTimeout(() => {
            this._loadingService.resolve('configFullscreenDemo');
        }, 5000);
    }

}
