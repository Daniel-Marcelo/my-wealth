import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { generate, Observable } from 'rxjs';
import { Account } from '../services/account/account.model';
import { AccountService } from '../services/account/account.service';
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

  accounts$: Observable<Account[]>
  categories$: Observable<Category[]>;
  item = generateItem();

  constructor(private categoryService: CategoryService,
    private itemService: ItemService,
    private accountService: AccountService) { }

  ngOnInit() {
    this.categories$ = this.categoryService.all$;
    this.accounts$ = this.accountService.all$;
  }

  async createItem() {
    await this.itemService.createWithToast(this.item, "Item Created");
    this.item = generateItem();
  }
}
