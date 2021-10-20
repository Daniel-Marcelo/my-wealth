import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Category } from './category.model';
import { BaseFirestore } from '../base-firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseFirestore<Category> {

  item$: Observable<any>;
  all$;
  constructor(db: AngularFirestore) {
    super(db, "category")
  }
}
