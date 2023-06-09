import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private firestore : AngularFirestore) { }

  guardarTarea(tarea : Tarea) : Promise <any> {
    return this.firestore.collection('tareas').add(tarea);
  }

  listarTarea() : Observable <any> {
    return this.firestore.collection('tareas').snapshotChanges();
  }
}
