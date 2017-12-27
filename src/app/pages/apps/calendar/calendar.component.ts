import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent
} from 'angular-calendar';
import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours
} from 'date-fns';
import {Subject} from "rxjs/Subject";

const colors: any = {
    red: {
        primary: '#F44336',
        secondary: '#FFEBEE'
    },
    blue: {
        primary: '#2196F3',
        secondary: '#BBDEFB'
    },
    yellow: {
        primary: '#FFEB3B',
        secondary: '#FFFDE7'
    }
};

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {


    view: string = 'month';

    viewDate: Date = new Date();

    actions: CalendarEventAction[] = [
        {
            label: '<i class="material-icons at-tz-16">edit</i>',
            onClick: ({event}: { event: CalendarEvent }): void => {
                this.handleEvent('Edited', event);
            }
        },
        {
            label: '<i class="material-icons at-tz-16">delete</i>',
            onClick: ({event}: { event: CalendarEvent }): void => {
                this.events = this.events.filter(iEvent => iEvent !== event);
                this.handleEvent('Deleted', event);
            }
        }
    ];

    refresh: Subject<any> = new Subject();

    events: CalendarEvent[] = [
        {
            start: subDays(startOfDay(new Date()), 1),
            end: addDays(new Date(), 1),
            title: 'A 3 day event',
            color: colors.red,
            actions: this.actions
        },
        {
            start: startOfDay(new Date()),
            title: 'An event with no end date',
            color: colors.yellow,
            actions: this.actions
        },
        {
            start: subDays(endOfMonth(new Date()), 3),
            end: addDays(endOfMonth(new Date()), 3),
            title: 'A long event that spans 2 months',
            color: colors.blue
        },
        {
            start: addHours(startOfDay(new Date()), 2),
            end: new Date(),
            title: 'A draggable and resizable event',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true
            },
            draggable: true
        }
    ];

    activeDayIsOpen: boolean = true;

    constructor() {
    }

    ngOnInit() {
    }

    getSeason(date) {
        let m = date.getMonth();
        if (m == 11 || m == 0 || m == 1) {
            return 'assets/img/backgrounds/banners/seasons/winter.jpg'
        }
        if (m == 2 || m == 3 || m == 4) {
            return 'assets/img/backgrounds/banners/seasons/spring.jpg'
        }
        if (m == 5 || m == 6 || m == 7) {
            return 'assets/img/backgrounds/banners/seasons/summer.jpg'
        }
        if (m == 8 || m == 9 || m == 10) {
            return 'assets/img/backgrounds/banners/seasons/fall.jpg'
        }
    }

    dayClicked({date, events}: { date: Date; events: CalendarEvent[] }): void {
        if (isSameMonth(date, this.viewDate)) {
            if (
                (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0
            ) {
                this.activeDayIsOpen = false;
            } else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    }

    eventTimesChanged({event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    }

    handleEvent(action: string, event: CalendarEvent): void {
        // this.modalData = { event, action };
        // this.modal.open(this.modalContent, { size: 'lg' });
    }

    addEvent(): void {
        this.events.push({
            title: 'New event',
            start: startOfDay(new Date()),
            end: endOfDay(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    }
}
