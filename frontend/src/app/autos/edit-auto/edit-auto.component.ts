import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-edit-auto',
  templateUrl: './edit-auto.component.html',
  styleUrls: ['./edit-auto.component.css']
})
export class EditAutoComponent implements OnInit {
  editAutos: any;
  autoId: any;
  dataLoaded: boolean = false;

  constructor(private formBuilder: FormBuilder, private autoService: AutoService, private activatedRoute: ActivatedRoute, private __snackBar: MatSnackBar, private router: Router) { }
  editAutoForm: FormGroup = new FormGroup({})
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( data => {
      this.autoId = data['id'];
    });
    this.autoService.viewAutos(this.autoId).subscribe( data => {
      this.editAutos = data;
      this.editAutoForm = this.formBuilder.group({
        'idauto': new FormControl(this.editAutos.id),
        'placa': new FormControl(this.editAutos.placa),
        'marca': new FormControl(this.editAutos.marca),
        'modelo': new FormControl(this.editAutos.modelo),
        'chasis': new FormControl(this.editAutos.chasis),
        'color': new FormControl(this.editAutos.color),
        'serialmotor': new FormControl(this.editAutos.serialmotor)
      });
      this.dataLoaded = true;
   });

  }

  editAuto(){
    let auto = {"id": this.editAutoForm.value.idauto, "placa": this.editAutoForm.value.placa,"marca": this.editAutoForm.value.marca,"modelo": this.editAutoForm.value.modelo,"chasis": this.editAutoForm.value.chasis,"color": this.editAutoForm.value.color,"serialmotor": this.editAutoForm.value.serialmotor};
    this.autoService.editAuto(auto).subscribe( data => {
      this.__snackBar.open('Auto Actualizado');
      this.router.navigate(['/', 'autos']);
    });
  }

}
