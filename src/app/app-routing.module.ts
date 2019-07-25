import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmortizedMenuComponent } from './amortized-menu/amortized-menu.component';
import { CreditMenuComponent } from './credit-menu/credit-menu.component';

const routes: Routes = [
  {path: 'amortized' , component: AmortizedMenuComponent},
  {path: 'credit' , component: CreditMenuComponent},
  {path: '', redirectTo: '/amortized', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
