import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AccountType } from '../services/account-type/account-type.model';
import { AccountTypeService } from '../services/account-type/account-type.service';
import { Account, generateAccount } from '../services/account/account.model';
import { AccountService } from '../services/account/account.service';

@Component({
  selector: 'new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
})
export class NewAccountComponent implements OnInit {

  account = { name: "", type: { name: "" }};
  accountTypes$: Observable<AccountType[]>
  constructor(private accountService: AccountService, private accountTypeService: AccountTypeService, private toastController: ToastController) { }

  ngOnInit() {  
    this.accountTypes$ = this.accountTypeService.all$;
  }

  async createAccount() {
    this.accountService.createWithToast(this.account, "Account Created")
    this.account = generateAccount();
  }
}
