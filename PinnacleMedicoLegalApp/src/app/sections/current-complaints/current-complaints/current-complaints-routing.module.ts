import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentComplaintsPage } from './current-complaints.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentComplaintsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentComplaintsPageRoutingModule {}
