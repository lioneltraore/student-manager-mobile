import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStudentPage } from './add-student.page';

const routes: Routes = [
  {
    path: '',
    component: AddStudentPage
  },
  {
    path: ':id',
    component: AddStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddStudentPageRoutingModule {}
