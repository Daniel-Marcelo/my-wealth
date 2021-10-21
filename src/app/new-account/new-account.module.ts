import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAccountComponent } from './new-account.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewAccountComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NewAccountComponent],
})
export class NewAccountModule { }
