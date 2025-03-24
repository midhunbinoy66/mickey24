import { Injectable } from '@angular/core';
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
    private fireStore:Firestore
  ) { }

  getTasks():Observable<Task[]>{
    return collectionData(this.taskCollection,{idField:'id'}) as Observable<Task[]>
  }

  addTask(task: Task) {
    return addDoc(this.taskCollection, task);
  }

  deleteTask(taskId: string) {
    const taskDoc = doc(this.fireStore, `tasks/${taskId}`);
    return deleteDoc(taskDoc);
  }

  updateTask(taskId:string,completed:boolean){
    const taskDoc = doc(this.fireStore,`tasks/${taskId}`);
    return updateDoc(taskDoc,{completed});
  }
}
