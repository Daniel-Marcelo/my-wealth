import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { generate, Observable } from 'rxjs';
import { Category } from '../services/category/category.model';
import { CategoryService } from '../services/category/category.service';
import { generateItem, Item } from '../services/item/item.model';
import { ItemService } from '../services/item/item.service';

@Component({
  selector: 'new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
})
export class NewItemComponent implements OnInit {

  categories: Observable<Category[]>;
  item = generateItem();

  constructor(private categoryService: CategoryService, 
    private itemService: ItemService, 
    private toastController: ToastController) {
    this.categories = this.categoryService.all$
  }

  ngOnInit() { }

  async createItem() {
    await this.itemService.create(this.item);
    const toast = await this.toastController.create({
      message: 'Created item.',
      duration: 2000
    });
    await toast.present();
  }

}
