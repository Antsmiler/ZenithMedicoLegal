import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyActivityLivingPageRoutingModule } from './daily-activity-living-routing.module';

import { DailyActivityLivingPage } from './daily-activity-living.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyActivityLivingPageRoutingModule
  ],
  declarations: [DailyActivityLivingPage]
})
export class DailyActivityLivingPageModule {}
