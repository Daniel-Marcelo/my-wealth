import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewItemComponent } from './new-item.component';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';



@NgModule({
  declarations: [NewItemComponent],
  imports: [
    InputTextModule,
    CommonModule,
    FormsModule
  ],
  exports: [NewItemComponent]
})
export class NewItemModule { }
