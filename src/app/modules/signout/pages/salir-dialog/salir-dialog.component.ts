import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-salir-dialog',
  templateUrl: './salir-dialog.component.html',
  styleUrls: ['./salir-dialog.component.css']
})
export class SalirDialogComponent {

  constructor(public dialogRef: MatDialogRef<SalirDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData) {}

  cancelar(){
    this.dialogRef.close();
  }
}

export interface DialogData {
  title: string,
  content: string
}