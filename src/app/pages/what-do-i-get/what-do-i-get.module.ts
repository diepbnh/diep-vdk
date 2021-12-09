import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatDoIGetPageRoutingModule } from './what-do-i-get-routing.module';

import { WhatDoIGetPage } from './what-do-i-get.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatDoIGetPageRoutingModule
  ],
  declarations: [WhatDoIGetPage]
})
export class WhatDoIGetPageModule {}
