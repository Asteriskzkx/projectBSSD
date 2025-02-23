import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BankAccountComponent } from './components/bank-account/bank-account.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'bank-account', component: BankAccountComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
