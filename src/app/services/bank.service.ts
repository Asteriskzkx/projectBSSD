import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  private accounts: Account[] = [
    { id: 1, accountName: 'บัญชีออมทรัพย์', accountNumber: '1234-5678-9012', balance: 1000, openingDate: new Date('2023-01-15'), accountType: 'ออมทรัพย์', accountStatus: 'ใช้งาน' },
    { id: 2, accountName: 'บัญชีเดินสะพัด', accountNumber: '9876-5432-1098', balance: 5000, openingDate: new Date('2023-03-20'), accountType: 'เดินสะพัด', accountStatus: 'ใช้งาน' },
    { id: 3, accountName: 'บัญชีเงินฝากประจำ', accountNumber: '5678-9012-3456', balance: 10000, openingDate: new Date('2023-05-10'), accountType: 'เงินฝากประจำ', accountStatus: 'ใช้งาน' },
    { id: 4, accountName: 'บัญชีเงินฝากประจำ', accountNumber: '9012-3456-7890', balance: 20000, openingDate: new Date('2023-07-25'), accountType: 'เงินฝากประจำ', accountStatus: 'ใช้งาน' },
    { id: 5, accountName: 'บัญชีออมทรัพย์', accountNumber: '3456-7890-1234', balance: 30000, openingDate: new Date('2023-09-30'), accountType: 'ออมทรัพย์', accountStatus: 'ใช้งาน' },
    { id: 6, accountName: 'บัญชีเงินฝากประจำ', accountNumber: '7890-1234-5678', balance: 40000, openingDate: new Date('2023-11-05'), accountType: 'เงินฝากประจำ', accountStatus: 'ใช้งาน' },
    { id: 7, accountName: 'บัญชีเดินสะพัด', accountNumber: '2345-6789-0123', balance: 50000, openingDate: new Date('2023-12-10'), accountType: 'เดินสะพัด', accountStatus: 'ใช้งาน' },
    { id: 8, accountName: 'บัญชีออมทรัพย์', accountNumber: '6789-0123-4567', balance: 60000, openingDate: new Date('2024-01-15'), accountType: 'ออมทรัพย์', accountStatus: 'ใช้งาน' },
    { id: 9, accountName: 'บัญชีเดินสะพัด', accountNumber: '0123-4567-8901', balance: 70000, openingDate: new Date('2024-03-20'), accountType: 'เดินสะพัด', accountStatus: 'ใช้งาน' },
    { id: 10, accountName: 'บัญชีเงินฝากประจำ', accountNumber: '4567-8901-2345', balance: 80000, openingDate: new Date('2024-05-10'), accountType: 'เงินฝากประจำ', accountStatus: 'ใช้งาน' },
    { id: 11, accountName: 'บัญชีเงินฝากประจำ', accountNumber: '8901-2345-6789', balance: 90000, openingDate: new Date('2024-07-25'), accountType: 'เงินฝากประจำ', accountStatus: 'ใช้งาน' },
    { id: 12, accountName: 'บัญชีออมทรัพย์', accountNumber: '2345-6789-0123', balance: 100000, openingDate: new Date('2024-09-30'), accountType: 'ออมทรัพย์', accountStatus: 'ใช้งาน' },
    { id: 13, accountName: 'บัญชีเงินฝากประจำ', accountNumber: '6789-0123-4567', balance: 110000, openingDate: new Date('2024-11-05'), accountType: 'เงินฝากประจำ', accountStatus: 'ใช้งาน' },
    { id: 14, accountName: 'บัญชีเดินสะพัด', accountNumber: '0123-4567-8901', balance: 120000, openingDate: new Date('2024-12-10'), accountType: 'เดินสะพัด', accountStatus: 'ใช้งาน' },
    { id: 15, accountName: 'บัญชีออมทรัพย์', accountNumber: '4567-8901-2345', balance: 130000, openingDate: new Date('2025-01-15'), accountType: 'ออมทรัพย์', accountStatus: 'ใช้งาน' },
  ];

  getAccounts(): Account[] {
    return this.accounts
  }

  getAccount(id: number): Account | undefined {
    return this.accounts.find(account => account.id === id)
  }

  constructor() { }
}
