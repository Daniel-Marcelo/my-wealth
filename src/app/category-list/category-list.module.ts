import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list.component';
import { NewCategoryModule } from '../new-category/new-category.module';



@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule,
    NewCategoryModule
  ],
  exports: [CategoryListComponent],
})
export class CategoryListModule { }
