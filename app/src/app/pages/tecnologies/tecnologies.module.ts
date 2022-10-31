import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnologiesPageRoutingModule } from './tecnologies-routing.module';

import { TecnologiesPage } from './tecnologies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnologiesPageRoutingModule
  ],
  declarations: [TecnologiesPage]
})
export class TecnologiesPageModule {}
