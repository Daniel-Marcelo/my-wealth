import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAccountTypeComponent } from './new-account-type.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NewAccountTypeComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NewAccountTypeComponent],
})
export class NewAccountTypeModule { }
