import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectAccountRoutingModule } from './select-account-routing.module';
import { SelectAccountComponent } from './select-account.component';


@NgModule({
  declarations: [
    SelectAccountComponent
  ],
  imports: [
    CommonModule,
    SelectAccountRoutingModule
  ]
})
export class SelectAccountModule { }
