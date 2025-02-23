export interface Account {
    id: number;
    accountName: string;
    accountNumber: string;
    balance: number;
    openingDate: Date;
    accountType: string;
    accountStatus: string;
    branch: string;
    interestRate: number;
    currency: string;
    ownerName: string;
    ownerAddress: string;
    ownerPhone: string;
    ownerEmail: string;
    accountManager: string;
    lastTransactionDate: Date;
    accountPurpose: string;
    accountNotes: string;
}
