import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkecthesPageRoutingModule } from './skecthes-routing.module';

import { SkecthesPage } from './skecthes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkecthesPageRoutingModule
  ],
  declarations: [SkecthesPage]
})
export class SkecthesPageModule {}
