import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientHubPageRoutingModule } from './client-hub-routing.module';

import { ClientHubPage } from './client-hub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientHubPageRoutingModule
  ],
  declarations: [ClientHubPage]
})
export class ClientHubPageModule {}
