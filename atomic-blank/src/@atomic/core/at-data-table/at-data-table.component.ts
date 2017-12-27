import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef,
         ContentChildren, TemplateRef, AfterContentInit, QueryList, Inject, Optional, ViewChildren } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { coerceBooleanProperty, ENTER, SPACE, UP_ARROW, DOWN_ARROW } from '@angular/cdk';

import { AtDataTableRowComponent } from './at-data-table-row/at-data-table-row.component';
import { IAtDataTableSortChangeEvent } from './at-data-table-column/at-data-table-column.component';
import { AtDataTableTemplateDirective } from './at-data-table-directives/at-data-table-template.directive';

const noop: any = () => {
  // empty method
};

export const AT_DATA_TABLE_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AtDataTableComponent),
  multi: true,
};

export enum AtDataTableSortingOrder {
  Ascending = <any>'ASC',
  Descending = <any>'DESC',
}

export interface IAtDataTableColumn {
  name: string;
  label: string;
  tooltip?: string;
  numeric?: boolean;
  format?: (value: any) => any;
  nested?: boolean;
  sortable?: boolean;
  hidden?: boolean;
  filter?: boolean;
}

export interface IAtDataTableSelectEvent {
  row: any;
  selected: boolean;
}

export interface IAtDataTableSelectAllEvent {
  rows: any[];
  selected: boolean;
}

export interface IAtDataTableRowClickEvent {
  row: any;
}

export enum AtDataTableArrowKeyDirection {
  Ascending = <any>'ASC',
  Descending = <any>'DESC',
}

@Component({
  providers: [ AT_DATA_TABLE_CONTROL_VALUE_ACCESSOR ],
  selector: 'at-data-table',
  styleUrls: ['./at-data-table.component.scss' ],
  templateUrl: './at-data-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtDataTableComponent implements ControlValueAccessor, AfterContentInit {

  /**
   * Implemented as part of ControlValueAccessor.
   */
  private _value: any[] = [];
  /** Callback registered via registerOnChange (ControlValueAccessor) */
  private _onChangeCallback: (_: any) => void = noop;

  /** internal attributes */
  private _data: any[];
  private _columns: IAtDataTableColumn[];
  private _selectable: boolean = false;
  private _clickable: boolean = false;
  private _multiple: boolean = true;
  private _allSelected: boolean = false;
  private _indeterminate: boolean = false;

  /** sorting */
  private _sortable: boolean = false;
  private _sortBy: IAtDataTableColumn;
  private _sortOrder: AtDataTableSortingOrder = AtDataTableSortingOrder.Ascending;

  /** shift select */
  private _lastSelectedIndex: number = -1;
  private _selectedBeforeLastIndex: number = -1;
  private _lastArrowKeyDirection: AtDataTableArrowKeyDirection;

  /** template fetching support */
  private _templateMap: Map<string, TemplateRef<any>> = new Map<string, TemplateRef<any>>();
  @ContentChildren(AtDataTableTemplateDirective) _templates: QueryList<AtDataTableTemplateDirective>;

  @ViewChildren(AtDataTableRowComponent) _rows: QueryList<AtDataTableRowComponent>;

  /**
   * Returns true if all values are selected.
   */
  get allSelected(): boolean {
    return this._allSelected;
  }

  /**
   * Returns true if all values are not deselected
   * and atleast one is.
   */
  get indeterminate(): boolean {
    return this._indeterminate;
  }

  /**
   * Implemented as part of ControlValueAccessor.
   */
  @Input() set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this._onChangeCallback(v);
      this.refresh();
    }
  }
  get value(): any { return this._value; }

  /**
   * data?: {[key: string]: any}[]
   * Sets the data to be rendered as rows.
   */
  @Input('data')
  set data(data: any[]) {
    this._data = data;
    this.refresh();
  }
  get data(): any[] {
    return this._data;
  }

  /**
   * columns?: IAtDataTableColumn[]
   * Sets additional column configuration. [IAtDataTableColumn.name] has to exist in [data] as key.
   * Defaults to [data] keys.
   */
  @Input('columns')
  set columns(cols: IAtDataTableColumn[]) {
    this._columns = cols;
  }
  get columns(): IAtDataTableColumn[] {
    if (this._columns) {
      return this._columns;
    }

    if (this.hasData) {
      this._columns = [];
      // if columns is undefined, use key in [data] rows as name and label for column headers.
      let row: any = this._data[0];
      Object.keys(row).forEach((k: string) => {
        if (!this._columns.find((c: any) => c.name === k)) {
          this._columns.push({ name: k, label: k });
        }
      });
      return this._columns;
    } else {
      return [];
    }
  }

  /**
   * selectable?: boolean
   * Enables row selection events, hover and selected row states.
   * Defaults to 'false'
   */
  @Input('selectable')
  set selectable(selectable: boolean) {
    this._selectable = coerceBooleanProperty(selectable);
  }
  get selectable(): boolean {
    return this._selectable;
  }

  /**
   * clickable?: boolean
   * Enables row click events, hover.
   * Defaults to 'false'
   */
  @Input('clickable')
  set clickable(clickable: boolean) {
    this._clickable = coerceBooleanProperty(clickable);
  }
  get clickable(): boolean {
    return this._clickable;
  }

  /**
   * multiple?: boolean
   * Enables multiple row selection. [selectable] needs to be enabled.
   * Defaults to 'false'
   */
  @Input('multiple')
  set multiple(multiple: boolean) {
    this._multiple = coerceBooleanProperty(multiple);
  }
  get multiple(): boolean {
    return this._multiple;
  }

  /**
   * sortable?: boolean
   * Enables sorting events, sort icons and active column states.
   * Defaults to 'false'
   */
  @Input('sortable')
  set sortable(sortable: boolean) {
    this._sortable = coerceBooleanProperty(sortable);
  }
  get sortable(): boolean {
    return this._sortable;
  }

  /**
   * sortBy?: string
   * Sets the active sort column. [sortable] needs to be enabled.
   */
  @Input('sortBy')
  set sortBy(columnName: string) {
    if (!columnName) {
      return;
    }
    const column: IAtDataTableColumn = this.columns.find((c: any) => c.name === columnName);
    if (!column) {
      throw new Error('[sortBy] must be a valid column name');
    }

    this._sortBy = column;
  }
  get sortByColumn(): IAtDataTableColumn {
    return this._sortBy;
  }

  /**
   * sortOrder?: ['ASC' | 'DESC'] or AtDataTableSortingOrder
   * Sets the sort order of the [sortBy] column. [sortable] needs to be enabled.
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
  get sortOrderEnum(): AtDataTableSortingOrder {
    return this._sortOrder;
  }

  get hasData(): boolean {
    return this._data && this._data.length > 0;
  }

  /**
   * sortChange?: function
   * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
   * Emits an [IAtDataTableSortChangeEvent] implemented object.
   */
  @Output('sortChange') onSortChange: EventEmitter<IAtDataTableSortChangeEvent> =
                                      new EventEmitter<IAtDataTableSortChangeEvent>();

  /**
   * rowSelect?: function
   * Event emitted when a row is selected/deselected. [selectable] needs to be enabled.
   * Emits an [IAtDataTableSelectEvent] implemented object.
   */
  @Output('rowSelect') onRowSelect: EventEmitter<IAtDataTableSelectEvent> = new EventEmitter<IAtDataTableSelectEvent>();

  /**
   * rowClick?: function
   * Event emitted when a row is clicked.
   * Emits an [IAtDataTableRowClickEvent] implemented object.
   */
  @Output('rowClick') onRowClick: EventEmitter<IAtDataTableRowClickEvent> = new EventEmitter<IAtDataTableRowClickEvent>();

  /**
   * selectAll?: function
   * Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled.
   * Emits an [IAtDataTableSelectAllEvent] implemented object.
   */
  @Output('selectAll') onSelectAll: EventEmitter<IAtDataTableSelectAllEvent> =
                                    new EventEmitter<IAtDataTableSelectAllEvent>();

  constructor(@Optional() @Inject(DOCUMENT) private _document: any,
              private _changeDetectorRef: ChangeDetectorRef) {}

  /**
   * compareWith?: function(row, model): boolean
   * Allows custom comparison between row and model to see if row is selected or not
   * Default comparation is by object reference
   */
  @Input('compareWith') compareWith: (row: any, model: any) => boolean = (row: any, model: any) => {
    return row === model;
  }

  /**
   * Loads templates and sets them in a map for faster access.
   */
  ngAfterContentInit(): void {
    for (let i: number = 0; i < this._templates.toArray().length; i++) {
      this._templateMap.set(
        this._templates.toArray()[i].atDataTableTemplate,
        this._templates.toArray()[i].templateRef,
      );
    }
  }

  getCellValue(column: IAtDataTableColumn, value: any): string {
    if (column.nested === undefined || column.nested) {
      return this._getNestedValue(column.name, value);
    }
    return value[column.name];
  }

  /**
   * Getter method for template references
   */
   getTemplateRef(name: string): TemplateRef<any> {
     return this._templateMap.get(name);
   }

  /**
   * Clears model (ngModel) of component by removing all values in array.
   */
  clearModel(): void {
    this._value.splice(0, this._value.length);
  }

  /**
   * Refreshes data table and rerenders [data] and [columns]
   */
  refresh(): void {
    this._calculateCheckboxState();
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Selects or clears all rows depending on 'checked' value.
   */
  selectAll(checked: boolean): void {
    let toggledRows: any[] = [];
    if (checked) {
      this._data.forEach((row: any) => {
        // skiping already selected rows
        if (!this.isRowSelected(row)) {
          this._value.push(row);
          // checking which ones are being toggled
          toggledRows.push(row);
        }
      });
      this._allSelected = true;
      this._indeterminate = true;
    } else {
      this._data.forEach((row: any) => {
        // checking which ones are being toggled
        if (this.isRowSelected(row)) {
          toggledRows.push(row);
        }
        row = this._value.filter((val: any) => {
            return this.compareWith(row, val);
          })[0];
        let index: number = this._value.indexOf(row);
        if (index > -1) {
          this._value.splice(index, 1);
        }
      });
      this._allSelected = false;
      this._indeterminate = false;
    }
    this.onSelectAll.emit({rows: toggledRows, selected: checked});
  }

  /**
   * Checks if row is selected
   */
  isRowSelected(row: any): boolean {
    // compare items by [compareWith] function
    return this._value ? this._value.filter((val: any) => {
      return this.compareWith(row, val);
    }).length > 0 : false;
  }

  /**
   * Selects or clears a row depending on 'checked' value if the row is 'selected'
   * handles cntrl clicks and shift clicks for multi-select
   */
  select(row: any, event: Event, currentSelected: number): void {
    if (this.selectable) {
      this.blockEvent(event);
      this._doSelection(row);

      // Check to see if Shift key is selected and need to select everything in between
      let mouseEvent: MouseEvent = event as MouseEvent;
      if (this.multiple && mouseEvent && mouseEvent.shiftKey && this._lastSelectedIndex > -1) {
        let firstIndex: number = currentSelected;
        let lastIndex: number = this._lastSelectedIndex;
        if (currentSelected > this._lastSelectedIndex) {
          firstIndex = this._lastSelectedIndex;
          lastIndex = currentSelected;
        }
        for (let i: number = firstIndex + 1; i < lastIndex; i++) {
          this._doSelection(this._data[i]);
        }
      }
      // set the last selected attribute unless the last selected unchecked a row
      if (this.isRowSelected(this._data[currentSelected])) {
        this._selectedBeforeLastIndex = this._lastSelectedIndex;
        this._lastSelectedIndex = currentSelected;
      } else {
        this._lastSelectedIndex = this._selectedBeforeLastIndex;
      }
      // everything is unselected so start over
      if (!this._indeterminate && !this._allSelected) {
        this._lastSelectedIndex = -1;
      }
    }
  }

  /**
   * Overrides the onselectstart method of the document so other text on the page
   * doesn't get selected when doing shift selections.
   */
  disableTextSelection(): void {
    if (this._document) {
      this._document.onselectstart = function(): boolean {
        return false;
      };
    }
  }

  /**
   * Resets the original onselectstart method.
   */
  enableTextSelection(): void {
    if (this._document) {
      this._document.onselectstart = undefined;
    }
  }

  /**
   * emits the onRowClickEvent when a row is clicked
   * if clickable is true and selectable is false then select the row
   */
  handleRowClick(row: any, event: Event): void {
    if (this.clickable) {
      // ignoring linting rules here because attribute it actually null or not there
      // can't check for undefined
      const srcElement: any = event.srcElement || event.currentTarget;
      /* tslint:disable-next-line */
      if (srcElement.getAttribute('stopRowClick') === null) {
        this.onRowClick.emit({row: row});
      }
    }
  }

  /**
   * Method handle for sort click event in column headers.
   */
  handleSort(column: IAtDataTableColumn): void {
    if (this._sortBy === column) {
      this._sortOrder = this._sortOrder === AtDataTableSortingOrder.Ascending ?
        AtDataTableSortingOrder.Descending : AtDataTableSortingOrder.Ascending;
    } else {
      this._sortBy = column;
      this._sortOrder = AtDataTableSortingOrder.Ascending;
    }
    this.onSortChange.next({ name: this._sortBy.name, order: this._sortOrder });
  }

  /**
   * Handle all keyup events when focusing a data table row
   */
  _rowKeyup(event: KeyboardEvent, row: any, index: number): void {
    let length: number;
    let rows: AtDataTableRowComponent[];
    switch (event.keyCode) {
      case ENTER:
      case SPACE:
        /** if user presses enter or space, the row should be selected */
        this.select(row, event, index);
        break;
      case UP_ARROW:
        rows = this._rows.toArray();
        length = rows.length;

        // check to see if changing direction and need to toggle the current row
        if (this._lastArrowKeyDirection === AtDataTableArrowKeyDirection.Descending) {
          index++;
        }
        /**
         * if users presses the up arrow, we focus the prev row
         * unless its the first row, then we move to the last row
         */
        if (index === 0) {
          if (!event.shiftKey) {
            rows[length - 1].focus();
          }
        } else {
          rows[index - 1].focus();
        }
        this.blockEvent(event);
        if (this.multiple && event.shiftKey) {
          this._doSelection(this._data[index - 1]);
          // if the checkboxes are all unselected then start over otherwise handle changing direction
          this._lastArrowKeyDirection = (!this._allSelected && !this._indeterminate) ? undefined : AtDataTableArrowKeyDirection.Ascending;
        }
        break;
      case DOWN_ARROW:
        rows = this._rows.toArray();
        length = rows.length;

        // check to see if changing direction and need to toggle the current row
        if (this._lastArrowKeyDirection === AtDataTableArrowKeyDirection.Ascending) {
          index--;
        }
        /**
         * if users presses the down arrow, we focus the next row
         * unless its the last row, then we move to the first row
         */
        if (index === (length - 1)) {
          if (!event.shiftKey) {
           rows[0].focus();
          }
        } else {
          rows[index + 1].focus();
        }
        this.blockEvent(event);
        if (this.multiple && event.shiftKey) {
          this._doSelection(this._data[index + 1]);
          // if the checkboxes are all unselected then start over otherwise handle changing direction
          this._lastArrowKeyDirection = (!this._allSelected && !this._indeterminate) ? undefined : AtDataTableArrowKeyDirection.Descending;
        }
        break;
      default:
        // default
    }
  }

  /**
   * Method to prevent the default events
   */
  blockEvent(event: Event): void {
    event.preventDefault();
  }

  /**
   * Implemented as part of ControlValueAccessor.
   */
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChange = (_: any) => noop;
  onTouched = () => noop;

  private _getNestedValue(name: string, value: any): string {
    if (!(value instanceof Object) || !name) {
      return value;
    }
    if (name.indexOf('.') > -1) {
      let splitName: string[] = name.split(/\.(.+)/, 2);
      return this._getNestedValue(splitName[1], value[splitName[0]]);
    } else {
      return value[name];
    }
  }

  /**
   * Does the actual Row Selection
   */
  private _doSelection(row: any): void {
    let wasSelected: boolean = this.isRowSelected(row);
    if (!this._multiple) {
      this.clearModel();
    }
    if (!wasSelected) {
      this._value.push(row);
    } else {
      // compare items by [compareWith] function
      row = this._value.filter((val: any) => {
        return this.compareWith(row, val);
      })[0];
      let index: number = this._value.indexOf(row);
      if (index > -1) {
        this._value.splice(index, 1);
      }
    }
    this._calculateCheckboxState();
    this.onRowSelect.emit({row: row, selected: !wasSelected});
    this.onChange(this._value);
  }

  /**
   * Calculate all the state of all checkboxes
   */
  private _calculateCheckboxState(): void {
    if (this._data) {
      this._allSelected = typeof this._data.find((d: any) => !this.isRowSelected(d)) === 'undefined';
      this._indeterminate = false;
      for (let row of this._data) {
        if (!this.isRowSelected(row)) {
          continue;
        }
        this._indeterminate = true;
        break;
      }
    }
  }
}
