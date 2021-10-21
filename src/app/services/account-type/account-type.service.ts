import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BaseFirestore } from '../base-firestore';
import { AccountType } from './account-type.model';

@Injectable({
  providedIn: 'root'
})
export class AccountTypeService extends BaseFirestore<AccountType> {

  constructor(db: AngularFirestore) { 
    super(db, "AccountType")
  }
}
