import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalBackgroundPageRoutingModule } from './medical-background-routing.module';

import { MedicalBackgroundPage } from './medical-background.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalBackgroundPageRoutingModule
  ],
  declarations: [MedicalBackgroundPage]
})
export class MedicalBackgroundPageModule {}
