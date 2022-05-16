import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterPinComponent } from './enter-pin.component';

const routes: Routes = [{ path: '', component: EnterPinComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterPinRoutingModule { }
