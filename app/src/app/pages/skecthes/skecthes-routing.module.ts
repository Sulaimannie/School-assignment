import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkecthesPage } from './skecthes.page';

const routes: Routes = [
  {
    path: '',
    component: SkecthesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkecthesPageRoutingModule {}
