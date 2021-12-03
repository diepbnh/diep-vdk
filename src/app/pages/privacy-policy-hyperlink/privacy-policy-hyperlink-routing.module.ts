import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivacyPolicyHyperlinkPage } from './privacy-policy-hyperlink.page';

const routes: Routes = [
  {
    path: '',
    component: PrivacyPolicyHyperlinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivacyPolicyHyperlinkPageRoutingModule {}
