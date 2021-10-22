import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController } from '@ionic/angular';
import { BaseFirestore } from '../base-firestore';
import { Account } from './account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseFirestore<Account> {
  constructor(db: AngularFirestore, toastController: ToastController) { 
    super(db, toastController, "Account")
  }
}
