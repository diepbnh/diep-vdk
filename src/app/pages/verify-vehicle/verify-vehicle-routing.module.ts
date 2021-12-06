import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyVehiclePage } from './verify-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyVehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyVehiclePageRoutingModule {}
