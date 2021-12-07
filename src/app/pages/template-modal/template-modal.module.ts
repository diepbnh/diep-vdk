import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplateModalPageRoutingModule } from './template-modal-routing.module';

import { TemplateModalPage } from './template-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemplateModalPageRoutingModule
  ],
  declarations: [TemplateModalPage]
})
export class TemplateModalPageModule {}
