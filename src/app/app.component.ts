import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  item$: Observable<any>;
  constructor(firestore: Firestore) {
    const col = collection(firestore, 'items');
    this.item$ = collectionData(col);
    this.item$.subscribe(
      data => console.log(data)
    )
  }
}
