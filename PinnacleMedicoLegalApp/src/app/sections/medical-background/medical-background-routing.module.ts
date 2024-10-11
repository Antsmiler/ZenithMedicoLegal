import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalBackgroundPage } from './medical-background.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalBackgroundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalBackgroundPageRoutingModule {}
