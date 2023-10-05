import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AdminListComponent} from './admin-list/admin-list.component';
import{AdminEditComponent} from 'src/app/admin/admin-edit/admin-edit.component';

const routes: Routes = [
  {path:'list',component:AdminListComponent},

  //employee edit
  {path:'edit/:id',component:AdminEditComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
