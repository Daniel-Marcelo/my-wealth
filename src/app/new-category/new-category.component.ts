import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Category, generateCategory } from '../services/category/category.model';
import { CategoryService } from '../services/category/category.service';

@Component({
  selector: 'new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss'],
})
export class NewCategoryComponent implements OnInit {

  category = {} as Category;
  constructor(private categoryService: CategoryService, private toastController: ToastController) { }

  ngOnInit() {}

  async createCategory() {
    await this.categoryService.createWithToast(this.category, "Category Created");
    this.category = generateCategory();
  }

}
