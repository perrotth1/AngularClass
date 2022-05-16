import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterPinRoutingModule } from './enter-pin-routing.module';
import { EnterPinComponent } from './enter-pin.component';


@NgModule({
  declarations: [
    EnterPinComponent
  ],
  imports: [
    CommonModule,
    EnterPinRoutingModule
  ]
})
export class EnterPinModule { }
