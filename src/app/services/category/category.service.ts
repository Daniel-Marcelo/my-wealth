import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Category } from './category.model';
import { BaseFirestore } from '../base-firestore';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseFirestore<Category> {

  constructor(db: AngularFirestore, toastController: ToastController) {
    super(db, toastController, "Category")
  }
}
