import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgreeTermsPrivacyPolicyPage } from './agree-terms-privacy-policy.page';

const routes: Routes = [
  {
    path: '',
    component: AgreeTermsPrivacyPolicyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgreeTermsPrivacyPolicyPageRoutingModule {}
