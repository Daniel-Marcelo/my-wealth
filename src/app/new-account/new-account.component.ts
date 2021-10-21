import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Account, generateAccount } from '../services/account/account.model';
import { AccountService } from '../services/account/account.service';

@Component({
  selector: 'new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
})
export class NewAccountComponent implements OnInit {

  account = {} as Account;
  constructor(private accountService: AccountService, private toastController: ToastController) { }

  ngOnInit() {  }

  async createAccount() {
    this.accountService.create(this.account)
    const toast = await this.toastController.create({
      message: 'Created Account.',
      duration: 2000
    });
    await toast.present();
    this.account = generateAccount();
  }

}
