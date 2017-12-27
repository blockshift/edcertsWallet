import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-aviator-chips',
    templateUrl: './atomic-chips.component.html'
})
export class AtomicChipsComponent implements OnInit {


    disabled: boolean = false;
    chipAddition: boolean = true;
    chipRemoval: boolean = true;

    strings: string[] = [
        'stepper',
        'expansion-panel',
        'markdown',
        'highlight',
        'loading',
        'media',
        'chips',
        'http',
        'json-formatter',
        'pipes',
        'need more?',
    ];
    filteredStrings: string[];
    stringsModel: string[] = this.strings.slice(0, 6);


    // OBJECTS
    objects: any[] = [
        {id: 1, city: 'San Diego', population: '4M'},
        {id: 2, city: 'San Franscisco', population: '6M'},
        {id: 3, city: 'Los Angeles', population: '5M'},
        {id: 4, city: 'Austin', population: '3M'},
        {id: 5, city: 'New York City', population: '10M'},
    ];
    filteredObjects: string[];
    objectsModel: string[] = this.objects.slice(0, 2);

    // ASYNC
    filteringAsync: boolean = false;
    filteredAsync: string[];
    asyncModel: string[] = this.strings.slice(0, 2);

    // STACKED
    filteredStackedStrings: string[];
    stackedStringsModel: string[] = this.strings.slice(0, 2);

    constructor() {

    }

    ngOnInit(): void {
        this.filterStrings('');
        this.filterObjects('');
    }

    filterStrings(value: string): void {
        this.filteredStrings = this.strings.filter((item: any) => {
            if (value) {
                return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
            } else {
                return false;
            }
        }).filter((filteredItem: any) => {
            return this.stringsModel ? this.stringsModel.indexOf(filteredItem) < 0 : true;
        });
    }

    filterObjects(value: string): void {
        this.filteredObjects = this.objects.filter((obj: any) => {
            if (value) {
                return obj.city.toLowerCase().indexOf(value.toLowerCase()) > -1;
            } else {
                return false;
            }
        }).filter((filteredObj: any) => {
            return this.objectsModel ? this.objectsModel.indexOf(filteredObj) < 0 : true;
        });
    }

    filterAsync(value: string): void {
        this.filteredAsync = undefined;
        if (value) {
            this.filteringAsync = true;
            // Timeout isn't actually needed here, only added for demo to simulate async behavior
            setTimeout(() => {
                this.filteredAsync = this.strings.filter((item: any) => {
                    return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
                }).filter((filteredItem: any) => {
                    return this.asyncModel ? this.asyncModel.indexOf(filteredItem) < 0 : true;
                });
                this.filteringAsync = false;
            }, 2000);
        }
    }

    filterStackedStrings(value: string): void {
        this.filteredStackedStrings = this.strings.filter((item: any) => {
            if (value) {
                return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
            } else {
                return false;
            }
        });
    }
}
