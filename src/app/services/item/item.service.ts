import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BaseFirestore } from '../base-firestore';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService extends BaseFirestore<Item> {

  constructor(db: AngularFirestore) {
    super(db, "item")
   }
}
