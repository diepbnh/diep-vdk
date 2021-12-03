import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterVehicleInfoPage } from './enter-vehicle-info.page';

const routes: Routes = [
  {
    path: '',
    component: EnterVehicleInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterVehicleInfoPageRoutingModule {}
