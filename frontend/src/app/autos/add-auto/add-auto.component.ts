import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-add-auto',
  templateUrl: './add-auto.component.html',
  styleUrls: ['./add-auto.component.css']
})
export class AddAutoComponent implements OnInit {

  addAutoForm: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder, private autoService: AutoService, private __snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.addAutoForm = this.formBuilder.group({
      'placa': new FormControl(''),
      'marca': new FormControl(''),
      'modelo': new FormControl(''),
      'chasis': new FormControl(''),
      'color': new FormControl(''),
      'serialmotor': new FormControl('')
    })
  }

  addAuto(){
    this.autoService.addAuto(this.addAutoForm.value).subscribe( data => {
      this.__snackBar.open('Auto Registrado');
      this.router.navigate(['/', 'autos']);
    });
  }

}
