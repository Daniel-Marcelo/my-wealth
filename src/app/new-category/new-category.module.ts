import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCategoryComponent } from './new-category.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NewCategoryComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NewCategoryComponent],
})
export class NewCategoryModule { }
