import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'enterPin', 
    loadChildren: () => import('./enter-pin/enter-pin.module').then(m => m.EnterPinModule) 
  }, 
  { 
    path: 'selectAccount', 
    loadChildren: () => import('./select-account/select-account.module').then(m => m.SelectAccountModule) 
  }, 
  { 
    path: 'menu', 
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) 
  }, 
  { 
    path: 'withdraw', 
    loadChildren: () => import('./withdraw/withdraw.module').then(m => m.WithdrawModule) 
  }, 
  { 
    path: 'deposit', 
    loadChildren: () => import('./deposit/deposit.module').then(m => m.DepositModule) 
  },
  {
    path: '',
    redirectTo: 'enterPin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
