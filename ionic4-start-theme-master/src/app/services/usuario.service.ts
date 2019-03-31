import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Usuario {
  email : string;
  nombre : String;
  cantidadDeTierras : number;
  porcentajeAlimentacion : number;
  porcentajeTransporte : number;
  porcentajeEnergetico : number;
  porcentajeContaminacion : number;
  porcentajeAgua : number;
  consumoTotal: number;
  paneles: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuariosCollection: AngularFirestoreCollection<Usuario>
  
  private users: Observable<Usuario[]>;
  
  constructor(db: AngularFirestore ) { 
    this.usuariosCollection = db.collection<Usuario>('user');

    this.users = this.usuariosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map( a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
        });
      })
    );
  }

  getUsers() {
    return this.users;
  }

  getUser(id) {
    return this.usuariosCollection.doc<Usuario>(id).valueChanges();
  }

  updateUser(user: Usuario, id:string) {
    return this.usuariosCollection.doc(id).update(user);
  }

  addUser(user: Usuario){
    return this.usuariosCollection.add(user);
  }

  removeUser(id){
    return this.usuariosCollection.doc(id).delete();
  }


}
