import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientHubPage } from './client-hub.page';

const routes: Routes = [
  {
    path: '',
    component: ClientHubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientHubPageRoutingModule {}
