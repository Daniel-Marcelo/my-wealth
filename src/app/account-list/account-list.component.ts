import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../services/account/account.model';
import { AccountService } from '../services/account/account.service';

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
})
export class AccountListComponent implements OnInit {

  accounts$:Observable<Account[]>
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accounts$ = this.accountService.all$;
  }

  delete(id: string) {
    this.accountService.deleteWithToast(id, "Account Deleted")
  }
}
