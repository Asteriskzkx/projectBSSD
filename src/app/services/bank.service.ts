import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  private accounts: Account[] = [
    { id: 1, accountNumber: '123456789', balance: 1000 },
    { id: 2, accountNumber: '987654321', balance: 5000 },
    { id: 3, accountNumber: '123123123', balance: 20000 },
  ]

  getAccounts(): Account[] {
    return this.accounts
  }

  getAccount(id: number): Account | undefined {
    return this.accounts.find(account => account.id === id)
  }

  constructor() { }
}
