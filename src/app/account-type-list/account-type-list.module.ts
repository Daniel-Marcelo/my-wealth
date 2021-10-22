import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountTypeListComponent } from './account-type-list.component';
import { NewAccountTypeModule } from '../new-account-type/new-account-type.module';



@NgModule({
  declarations: [AccountTypeListComponent],
  imports: [
    CommonModule,
    NewAccountTypeModule
  ],
  exports: [AccountTypeListComponent],
})
export class AccountTypeListModule { }
