import {AfterViewInit, ChangeDetectorRef, Component, HostListener} from '@angular/core';

@Component({
    selector: 'app-mail',
    templateUrl: './mail.component.html'
})
export class MailComponent implements AfterViewInit {

    // Force change detection on windows resize, feel free to remove this if you don't need it.
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.changeDetectorRef.markForCheck();
    }

    constructor(private changeDetectorRef: ChangeDetectorRef) {
    }

    ngAfterViewInit() {
        // Wait for sidenav animation and triggers window resize event to force change detection.
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 1200)
    }
}
