import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAutosComponent } from './autos/list-autos/list-autos.component';
import { AddAutoComponent } from './autos/add-auto/add-auto.component';
import { DeleteAutoComponent } from './autos/delete-auto/delete-auto.component';
import { EditAutoComponent } from './autos/edit-auto/edit-auto.component';
import { ViewAutoComponent } from './autos/view-auto/view-auto.component';

const routes: Routes = [
  { path: 'delete/:id', component: DeleteAutoComponent },
  { path: 'autos',
    children: [
      { path: '', component: ListAutosComponent },
      { path: 'list', component: ListAutosComponent },
      { path: 'view/:id', component: ViewAutoComponent },
      { path: 'delete/:id', component: DeleteAutoComponent },
      { path: 'edit/:id', component: EditAutoComponent },
      { path: 'add', component: AddAutoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
