import {OnInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AutoService } from 'src/app/services/auto.service';
import { MatDialog } from "@angular/material/dialog";
import { DeleteAutoComponent } from "src/app/autos/delete-auto/delete-auto.component";
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-list-autos',
  templateUrl: './list-autos.component.html',
  styleUrls: ['./list-autos.component.css']
})
export class ListAutosComponent implements OnInit  {
  listAutos: any;
  dataSource: any;
  total: any;
  displayedColumns: string[] = [];
  validarAutoForm: FormGroup = new FormGroup({})
  @ViewChild(MatSort) sort: any;

  /**
   * Pre-defined columns list for user table
   */
  columnNames = [{
    id: 'id',
    value: 'No.',

  }, {
    id: 'placa',
    value: 'Placa',
  },
    {
      id: 'marca',
      value: 'Marca',
    },
    {
      id: 'modelo',
      value: 'Modelo',
    }, {
      id: 'chasis',
      value: 'Chasis',
    },
      {
        id: 'color',
        value: 'Color',
      },
      {
        id: 'serialmotor',
        value: 'Serial Motor',
      },
    {
      id: 'delete',
      value: 'Del',
    },
    {
      id: 'edit',
      value: 'Edit',
    },
    {
      id: 'view',
      value: 'Ver',
    }];
    minDate: Date;

    constructor(private formBuilder: FormBuilder, private autoService: AutoService, private router: Router,public dialogo: MatDialog, private __snackBar: MatSnackBar) {
      const currentYear = new Date().getFullYear();
      this.minDate = new Date(currentYear);
     }

  ngOnInit() {
    this.validarAutoForm = this.formBuilder.group({
      'placa': new FormControl(''),
      'fecha': new FormControl(''),
      'hora': new FormControl('')
    })
    this.autoService.listAutos().subscribe( data => {
       this.listAutos = data;
       this.total = this.listAutos.length
       this.displayedColumns = this.columnNames.map(x => x.id);
       let tableArr: Element[] = this.listAutos;
       for (let i = 0; i < tableArr.length; i++) {
        tableArr[i]['edit'] = tableArr[i]['id'];
        tableArr[i]['delete'] = tableArr[i]['id'];
        tableArr[i]['view'] = tableArr[i]['id'];
      }

       this.dataSource = new MatTableDataSource(tableArr);
       this.dataSource.sort = this.sort;
    });
  }

  mostrarDialogo(id: any): void {
    this.dialogo
      .open(DeleteAutoComponent, {
        data: "¿Esta Usted seguro?"
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.autoService.deleteAuto(id).subscribe(data => {
            this.__snackBar.open('Auto Eliminado');
            this.router.navigate(['/', 'autos']);
          })
        }
      });
  }

  validarAuto(){
    var datePipe = new DatePipe("en-US");
    this.validarAutoForm.value.fecha = datePipe.transform(this.validarAutoForm.value.fecha, 'dd-MM-yyyy');
    let auto = '/auto/query?placa='+this.validarAutoForm.value.placa+'&fecha='+this.validarAutoForm.value.fecha+'&hora='+this.validarAutoForm.value.hora;
    this.autoService.validarAuto(auto).subscribe( data => {
      const jsonValue = JSON.stringify(data);
      const valueFromJson = JSON.parse(jsonValue);
      console.log(valueFromJson.data);

      this.mostrarDialogoValidar(valueFromJson.data);

      this.router.navigate(['/', 'autos']);
    });
  }

  mostrarDialogoValidar(id: any): void {
    this.dialogo
      .open(ModalComponent, {
        data: id
      });
  }
}

export interface Element {
  id: number,
  placa: string,
  marca: string,
  modelo: string,
  chasis: string,
  color: string,
  serialmotor: string,
  delete: number,
  edit: number,
  view: number
}
