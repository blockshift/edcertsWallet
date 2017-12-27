import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  /* tslint:disable-next-line */
  selector: 'table[at-data-table]',
  styleUrls: ['./at-data-table-table.component.scss' ],
  templateUrl: './at-data-table-table.component.html',
})
export class AtDataTableTableComponent {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._renderer.addClass(this._elementRef.nativeElement, 'at-data-table');
  }

}
