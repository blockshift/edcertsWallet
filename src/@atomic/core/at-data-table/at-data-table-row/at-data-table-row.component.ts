import { Component, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
  /* tslint:disable-next-line */
  selector: 'tr[at-data-table-row]',
  styleUrls: ['./at-data-table-row.component.scss' ],
  templateUrl: './at-data-table-row.component.html',
})
export class AtDataTableRowComponent {

  private _selected: boolean = false;

  @Input('selected')
  set selected(selected: boolean) {
    if (selected) {
      this._renderer.addClass(this._elementRef.nativeElement, 'at-selected');
    } else {
      this._renderer.removeClass(this._elementRef.nativeElement, 'at-selected');
    }
    this._selected = selected;
  }
  get selected(): boolean {
    return this._selected;
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._renderer.addClass(this._elementRef.nativeElement, 'at-data-table-row');
  }

  focus(): void {
    this._elementRef.nativeElement.focus();
  }

}
