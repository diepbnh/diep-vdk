import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLaunchScreenPage } from './app-launch-screen.page';

const routes: Routes = [
  {
    path: '',
    component: AppLaunchScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppLaunchScreenPageRoutingModule {}
