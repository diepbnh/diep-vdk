import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VinLocatorPageRoutingModule } from './vin-locator-routing.module';

import { VinLocatorPage } from './vin-locator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VinLocatorPageRoutingModule
  ],
  declarations: [VinLocatorPage]
})
export class VinLocatorPageModule {}
