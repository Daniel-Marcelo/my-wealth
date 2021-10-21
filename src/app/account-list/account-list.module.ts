import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from './account-list.component';
import { NewAccountModule } from '../new-account/new-account.module';

@NgModule({
  declarations: [AccountListComponent],
  imports: [
    CommonModule,
    NewAccountModule
  ],
  exports: [AccountListComponent],
})
export class AccountListModule { }
