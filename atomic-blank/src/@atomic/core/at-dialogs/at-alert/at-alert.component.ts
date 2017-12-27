import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'at-alert-dialog',
  templateUrl: './at-alert.component.html',
  styleUrls: ['./at-alert.component.scss' ],
})
export class AtAlertDialogComponent {
  title: string;
  message: string;
  closeButton: string = 'CLOSE';

  constructor(private _dialogRef: MdDialogRef<AtAlertDialogComponent>) {}

  close(): void {
    this._dialogRef.close();
  }
}
