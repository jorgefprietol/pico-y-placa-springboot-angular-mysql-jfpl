import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor(public dialog: MatDialog,public dialogo: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) {}
  ngOnInit(): void {
  }

    cerrarDialogo(): void {
      this.dialogo.close(false);
    }
    confirmado(): void {
      this.dialogo.close(true);
    }
}
