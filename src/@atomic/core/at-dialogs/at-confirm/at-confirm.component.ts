import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'at-confirm-dialog',
  templateUrl: './at-confirm.component.html',
  styleUrls: ['./at-confirm.component.scss' ],
})
export class AtConfirmDialogComponent {
  title: string;
  message: string;
  cancelButton: string = 'CANCEL';
  acceptButton: string = 'ACCEPT';

  constructor(private _dialogRef: MdDialogRef<AtConfirmDialogComponent>) {}

  cancel(): void {
    this._dialogRef.close(false);
  }

  accept(): void {
    this._dialogRef.close(true);
  }
}
