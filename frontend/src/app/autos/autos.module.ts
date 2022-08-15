import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAutosComponent } from './list-autos/list-autos.component';
import { ViewAutoComponent } from './view-auto/view-auto.component';
import { AddAutoComponent } from './add-auto/add-auto.component';
import { EditAutoComponent } from './edit-auto/edit-auto.component';
import { DeleteAutoComponent } from './delete-auto/delete-auto.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    ListAutosComponent,
    ViewAutoComponent,
    AddAutoComponent,
    EditAutoComponent,
    DeleteAutoComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration:4500}}
  ]
})
export class AutosModule { }
