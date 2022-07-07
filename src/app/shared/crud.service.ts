import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  ref: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) {
    this.ref = this.db.list('/courses');
  }

  getList(){
    this.ref = this.db.list('courses');
    return this.ref;
  }
}
