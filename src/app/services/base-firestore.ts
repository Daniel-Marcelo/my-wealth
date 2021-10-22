import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

export type Doc<T> = (T & { id: string });

export abstract class BaseFirestore<T> {

    public all$: Observable<Doc<T>[]>;
    protected collection: AngularFirestoreCollection<T>;

    constructor(protected db: AngularFirestore, protected toastController: ToastController, collectionName: string) {
        this.collection = this.db.collection<T>(collectionName);

        this.all$ = this.collection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );
    }

    get(id: string): Observable<T> {
        return this.collection.doc<T>(id).valueChanges();
    }

    create(item: T): Promise<DocumentReference> {
        return this.collection.add(item);
    }

    async createWithToast(item: T, message: string) {
        console.log(item)
        await this.collection.add(item)
        const toast = await this.toastController.create({
            message,
            duration: 2000
        });
        await toast.present();
    }

    update(item: T, id: string): Promise<void> {
        return this.collection.doc<T>(id).update(item);
    }

    delete(id: string): Promise<void> {
        return this.collection.doc<T>(id).delete();
    }

    async deleteWithToast(id: string, message: string) {
        await this.collection.doc<T>(id).delete();
        const toast = await this.toastController.create({
            message,
            duration: 2000
        });
        await toast.present();
    }
}