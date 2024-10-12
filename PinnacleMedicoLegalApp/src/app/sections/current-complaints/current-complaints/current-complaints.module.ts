import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentComplaintsPageRoutingModule } from './current-complaints-routing.module';

import { CurrentComplaintsPage } from './current-complaints.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentComplaintsPageRoutingModule
  ],
  declarations: [CurrentComplaintsPage]
})
export class CurrentComplaintsPageModule {}
