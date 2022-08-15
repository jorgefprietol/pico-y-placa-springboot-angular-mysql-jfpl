import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-delete-auto',
  templateUrl: './delete-auto.component.html',
  styleUrls: ['./delete-auto.component.css']
})
export class DeleteAutoComponent implements OnInit {
  deleteAutos: any;
  autoId: any;

  constructor(private autoService: AutoService, private activatedRoute: ActivatedRoute, private router: Router, private __snackBar: MatSnackBar,public dialogo: MatDialogRef<DeleteAutoComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) { }
    cerrarDialogo(): void {
      this.dialogo.close(false);
    }
    confirmado(): void {
      this.dialogo.close(true);
    }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( data => {
      this.autoId = data['id'];
    });
    this.autoService.deleteAuto(this.autoId).subscribe( data => {
      this.__snackBar.open('Auto Eliminado');
      this.router.navigate(['/', 'autos']);
   });
  }

}
