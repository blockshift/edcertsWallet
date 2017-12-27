import { Component, Input, Renderer2, ElementRef, HostBinding } from '@angular/core';

@Component({
  /* tslint:disable-next-line */
  selector: 'td[at-data-table-cell]',
  styleUrls: ['./at-data-table-cell.component.scss' ],
  templateUrl: './at-data-table-cell.component.html',
})
export class AtDataTableCellComponent {

  /**
   * numeric?: boolean
   * Makes cell follow the numeric data-table specs.
   * Defaults to 'false'
   */
  @Input('numeric') numeric: boolean = false;

  @HostBinding('class.mat-numeric')
  get bindNumeric(): boolean {
    return this.numeric;
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._renderer.addClass(this._elementRef.nativeElement, 'at-data-table-cell');
  }

}
