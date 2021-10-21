import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { NewItemModule } from '../new-item/new-item.module';
import { NewCategoryModule } from '../new-category/new-category.module';
import { CategoryListModule } from '../category-list/category-list.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    NewItemModule,
    NewCategoryModule,
    CategoryListModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
