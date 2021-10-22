import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountType } from '../services/account-type/account-type.model';
import { AccountTypeService } from '../services/account-type/account-type.service';

@Component({
  selector: 'account-type-list',
  templateUrl: './account-type-list.component.html',
  styleUrls: ['./account-type-list.component.scss'],
})
export class AccountTypeListComponent implements OnInit {

  accountTypes$: Observable<AccountType[]>
  constructor(private accountTypeService: AccountTypeService) { }

  ngOnInit() {
    this.accountTypes$ = this.accountTypeService.all$
  }
  
  delete(id: string) {
    this.accountTypeService.deleteWithToast(id, "Account Type Deleted")
  }

}
