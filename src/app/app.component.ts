import {Component} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {CrudService} from "./shared/crud.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses: any;

  // ref: AngularFireList<any>;

  constructor(private crud: CrudService, private db: AngularFirestore) {
    this.courses = [];

    this.db.collection('/courses').valueChanges().subscribe(data => {
      console.log(data);
      this.courses = data;
    })
  }

  getId(){
    return Date.now().toString();
  }

  add() {
    this.db.collection('/courses').doc(this.getId()).set({key: this.courses.length + 1, value: 'course ' + (this.courses.length + 1)}).then(r => console.log(r))
  }
}
