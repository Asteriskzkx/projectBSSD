import { Component, OnInit } from '@angular/core';
import { BankService } from '../../services/bank.service';
import { Account } from '../../models/account.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-account',
  standalone: false,
  templateUrl: './bank-account.component.html',
  styleUrl: './bank-account.component.css',
})
export class BankAccountComponent implements OnInit {
  accounts: Account[] = [];
  selectedAccount: Account | undefined;

  constructor(
    private bankService: BankService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }
    this.accounts = this.bankService.getAccounts();
  }

  selectAccount(id: number) {
    this.selectedAccount = this.bankService.getAccount(id);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
