import { Injectable } from '@angular/core';
import { Todos } from './todos.model';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private firestore: AngularFirestore) { }
  getTodos() {
    return this.firestore.collection('todoList').snapshotChanges();
  }
  createTodos(todo: Todos){
    return this.firestore.collection('todoList').add(todo);
  }
  updateTodos(todo: Todos){
    delete todo.id;
    this.firestore.doc('todoList/' + todo.id).update(todo);
  }
  deleteTodos(todoId: string){
    this.firestore.doc('todoList/' + todoId).delete();
}
}
