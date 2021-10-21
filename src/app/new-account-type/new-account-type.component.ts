import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AccountType, generateAccountType } from '../services/account-type/account-type.model';
import { AccountTypeService } from '../services/account-type/account-type.service';

@Component({
  selector: 'new-account-type',
  templateUrl: './new-account-type.component.html',
  styleUrls: ['./new-account-type.component.scss'],
})
export class NewAccountTypeComponent implements OnInit {

  accountType = {} as AccountType;
  constructor(private accountTypeService: AccountTypeService, private toastController: ToastController) { }

  ngOnInit() {}

  async createAccountType() {
    await this.accountTypeService.create(this.accountType)
    const toast = await this.toastController.create({
      message: 'Created Account Type.',
      duration: 2000
    });
    await toast.present();
    this.accountType = generateAccountType();
  }

}
