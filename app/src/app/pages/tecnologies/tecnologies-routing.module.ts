import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnologiesPage } from './tecnologies.page';

const routes: Routes = [
  {
    path: '',
    component: TecnologiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnologiesPageRoutingModule {}
