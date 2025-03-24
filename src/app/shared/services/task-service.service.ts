import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';

export interface Task {
  id?: string;
  title: string;
  description:string;
  createdAt:number;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private taskCollection = collection(this.fireStore,'tasks');


  constructor(
    private fireStore:Firestore,
    private auth:Auth
  ) { }

  getTasks():Observable<Task[]>{
    const user = this.auth.currentUser;
    if(!user) return new Observable<Task[]>()

    const taskCollection = collection(this.fireStore, `users/${user.uid}/tasks`);
    return collectionData(taskCollection, { idField: 'id' }) as Observable<Task[]>
    // return collectionData(this.taskCollection,{idField:'id'}) as Observable<Task[]>
  }

  addTask(task: Task) {

    const user = this.auth.currentUser;
    if(!user) return Promise.reject();

    const taskCollection = collection(this.fireStore,`users/${user.uid}/tasks`)
    return addDoc(taskCollection, task);

    // return addDoc(this.taskCollection, task);
  }

  deleteTask(taskId: string) {
    const taskDoc = doc(this.fireStore, `tasks/${taskId}`);
    return deleteDoc(taskDoc);
  }

  updateTask(taskId:string,completed:boolean){
    const user = this.auth.currentUser;
    if (!user) return Promise.reject();

    const taskDoc = doc(this.fireStore, `users/${user.uid}/tasks/${taskId}`);
    return  updateDoc(taskDoc, { completed })
  }
}
