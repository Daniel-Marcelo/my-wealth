import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BaseFirestore } from '../base-firestore';
import { Account } from './account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseFirestore<Account> {
  constructor(db: AngularFirestore) { 
    super(db, "account")
  }
}
