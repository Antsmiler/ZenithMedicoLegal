import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyActivityLivingPage } from './daily-activity-living.page';

const routes: Routes = [
  {
    path: '',
    component: DailyActivityLivingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyActivityLivingPageRoutingModule {}
