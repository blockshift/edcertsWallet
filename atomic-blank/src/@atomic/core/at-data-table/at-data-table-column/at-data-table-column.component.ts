import { Component, Input, Output, EventEmitter, Renderer2, ElementRef, HostBinding } from '@angular/core';

import { AtDataTableSortingOrder } from '../at-data-table.component';

export interface IAtDataTableSortChangeEvent {
  order: AtDataTableSortingOrder;
  name: string;
}

@Component({
  /* tslint:disable-next-line */
  selector: 'th[at-data-table-column]',
  styleUrls: ['./at-data-table-column.component.scss' ],
  templateUrl: './at-data-table-column.component.html',
})
export class AtDataTableColumnComponent {

  private _sortOrder: AtDataTableSortingOrder = AtDataTableSortingOrder.Ascending;

  /**
   * name?: string
   * Sets unique column [name] for [sortable] events.
   */
  @Input('name') name: string = '';

  /**
   * sortable?: boolean
   * Enables sorting events, sort icons and active column states.
   * Defaults to 'false'
   */
  @Input('sortable') sortable: boolean = false;

  /**
   * active?: boolean
   * Sets column to active state when 'true'.
   * Defaults to 'false'
   */
  @Input('active') active: boolean = false;

  /**
   * numeric?: boolean
   * Makes column follow the numeric data-table specs and sort icon.
   * Defaults to 'false'
   */
  @Input('numeric') numeric: boolean = false;

  /**
   * sortOrder?: ['ASC' | 'DESC'] or AtDataTableSortingOrder
   * Sets the sort order of column.
   * Defaults to 'ASC' or AtDataTableSortingOrder.Ascending
   */
  @Input('sortOrder')
  set sortOrder(order: 'ASC' | 'DESC') {
    let sortOrder: string = order ? order.toUpperCase() : 'ASC';
    if (sortOrder !== 'DESC' && sortOrder !== 'ASC') {
      throw new Error('[sortOrder] must be empty, ASC or DESC');
    }

    this._sortOrder = sortOrder === 'ASC' ?
      AtDataTableSortingOrder.Ascending : AtDataTableSortingOrder.Descending;
  }

  /**
   * sortChange?: function
   * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
   * Emits an [IAtDataTableSortChangeEvent] implemented object.
   */
  @Output('sortChange') onSortChange: EventEmitter<IAtDataTableSortChangeEvent> =
                        new EventEmitter<IAtDataTableSortChangeEvent>();

  @HostBinding('class.mat-clickable')
  get bindClickable(): boolean {
    return this.sortable;
  }

  @HostBinding('class.mat-sortable')
  get bingSortable(): boolean {
    return this.sortable;
  }

  @HostBinding('class.mat-active')
  get bindActive(): boolean {
    return this.active;
  }

  @HostBinding('class.mat-numeric')
  get bindNumeric(): boolean {
    return this.numeric;
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._renderer.addClass(this._elementRef.nativeElement, 'at-data-table-column');
  }

  handleSortBy(): void {
    this.onSortChange.emit({name: this.name, order: this._sortOrder});
  }

  isAscending(): boolean {
    return this._sortOrder === AtDataTableSortingOrder.Ascending;
  }

  isDescending(): boolean {
    return this._sortOrder === AtDataTableSortingOrder.Descending;
  }

}
