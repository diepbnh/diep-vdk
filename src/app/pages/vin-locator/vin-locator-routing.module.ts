import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VinLocatorPage } from './vin-locator.page';

const routes: Routes = [
  {
    path: '',
    component: VinLocatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VinLocatorPageRoutingModule {}
