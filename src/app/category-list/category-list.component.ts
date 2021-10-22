import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../services/category/category.model';
import { CategoryService } from '../services/category/category.service';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {

  categories$: Observable<Category[]>
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories$ = this.categoryService.all$;
  }

  async delete(id: string) {
    await this.categoryService.deleteWithToast(id, "Category Deleted")
  }
}
