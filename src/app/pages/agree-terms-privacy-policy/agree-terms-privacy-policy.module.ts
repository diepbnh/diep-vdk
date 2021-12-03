import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgreeTermsPrivacyPolicyPageRoutingModule } from './agree-terms-privacy-policy-routing.module';

import { AgreeTermsPrivacyPolicyPage } from './agree-terms-privacy-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgreeTermsPrivacyPolicyPageRoutingModule
  ],
  declarations: [AgreeTermsPrivacyPolicyPage]
})
export class AgreeTermsPrivacyPolicyPageModule {}
