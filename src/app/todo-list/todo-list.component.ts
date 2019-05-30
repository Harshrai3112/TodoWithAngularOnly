import { Component, OnInit } from '@angular/core';
// import { AngularFirestore} from '@angular/fire/firestore';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-todo-list',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
      })),
      state('closed', style({
        backgroundColor: 'rgb(179, 53, 50)',
        opacity: 0.1,
        color: 'green',
      })),
      transition('open => closed', [
        animate('2s  ease-out')
      ]),
      transition('closed => open', [
        animate('2s  ease-out')
      ]),
    ]),
  ],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList = [
    [
    // tslint:disable-next-line:max-line-length
    [
      {
        work: 'Buy fruits', completionDate: new Date(2019, 2, 4),
        daysDelayed: this.dateDiff(new Date(), new Date(2019, 2, 4))
      },
      { work: 'Buy Milk', completionDate: new Date(2019, 8, 16), daysDelayed: this.dateDiff(new Date(), new Date(2019, 8, 16)) },
      // tslint:disable-next-line:max-line-length
      { work: 'Get a 10kg sugar ', completionDate: new Date(2019, 3, 31), daysDelayed: this.dateDiff(new Date(), new Date(2019, 3, 31)) }
    ],
    [
      {
        work: 'Complete testing  ', completionDate: new Date(2019, 2, 4),
        daysDelayed: this.dateDiff(new Date(), new Date(2019, 2, 4))
      },
      { work: 'xyz testing', completionDate: new Date(2019, 8, 16), daysDelayed: this.dateDiff(new Date(), new Date(2019, 8, 16)) },
      // tslint:disable-next-line:max-line-length
      { work: 'Complete Angular project', completionDate: new Date(2019, 3, 31), daysDelayed: this.dateDiff(new Date(), new Date(2019, 3, 31)) }
    ],
    [
      {
        work: 'Complete DS Assignment ', completionDate: new Date(2019, 2, 4),
        daysDelayed: this.dateDiff(new Date(), new Date(2019, 2, 4))
      },
      { work: 'Maths Assignment', completionDate: new Date(2019, 8, 16), daysDelayed: this.dateDiff(new Date(), new Date(2019, 8, 16)) },
      // tslint:disable-next-line:max-line-length
      { work: 'Complete Angular project', completionDate: new Date(2019, 3, 31), daysDelayed: this.dateDiff(new Date(), new Date(2019, 3, 31)) }
    ],
  ], [
    // tslint:disable-next-line:max-line-length
    [
      {
        work: ' Second User -> Buy friuts', completionDate: new Date(2019, 2, 4),
        daysDelayed: this.dateDiff(new Date(), new Date(2019, 2, 4))
      },
      { work: 'Buy Milk', completionDate: new Date(2019, 8, 16), daysDelayed: this.dateDiff(new Date(), new Date(2019, 8, 16)) },
      // tslint:disable-next-line:max-line-length
      { work: 'Get a 10kg sugar ', completionDate: new Date(2019, 3, 31), daysDelayed: this.dateDiff(new Date(), new Date(2019, 3, 31)) }
    ],
    [
      {
        work: 'Second User -> Complete testing  ', completionDate: new Date(2019, 2, 4),
        daysDelayed: this.dateDiff(new Date(), new Date(2019, 2, 4))
      },
      { work: 'xyz testing', completionDate: new Date(2019, 8, 16), daysDelayed: this.dateDiff(new Date(), new Date(2019, 8, 16)) },
      // tslint:disable-next-line:max-line-length
      { work: 'Complete Angular project', completionDate: new Date(2019, 3, 31), daysDelayed: this.dateDiff(new Date(), new Date(2019, 3, 31)) }
    ],
    [
      {
        work: 'Second User -> Complete DS Assignment ', completionDate: new Date(2019, 2, 4),
        daysDelayed: this.dateDiff(new Date(), new Date(2019, 2, 4))
      },
      { work: 'Maths Assignment', completionDate: new Date(2019, 8, 16), daysDelayed: this.dateDiff(new Date(), new Date(2019, 8, 16)) },
      // tslint:disable-next-line:max-line-length
      { work: 'Complete Angular project', completionDate: new Date(2019, 3, 31), daysDelayed: this.dateDiff(new Date(), new Date(2019, 3, 31)) }
    ],
  ]];
  task = '';
  d = new Date();
  comDate: Date;
  updateComDate: Date;
  updateTask = '';
  // tslint:disable-next-line:max-line-length
  toggleForm = [[[false, false, false], [false, false, false], [false, false, false]],[[false, false, false], [false, false, false], [false, false, false]]];
  daysDelayed: number;
  d1: Date;
  d2: Date;
  delay: number;
  isOpen = [[[true, true, true], [true, true, true], [true, true, true]],[[true, true, true], [true, true, true], [true, true, true]]];
  boolVal = false;
  j: number;
  userId: number;
  dateDiff(date1, date2) {
    this.d1 = new Date(date1);
    this.d2 = new Date(date2);
    // tslint:disable-next-line:max-line-length
    return Math.floor((Date.UTC(this.d1.getFullYear(), this.d1.getMonth(), this.d1.getDate()) - Date.UTC(this.d2.getFullYear(), this.d2.getMonth(), this.d2.getDate())) / (1000 * 60 * 60 * 24));
  }
  addTask() {
    this.delay = this.dateDiff(new Date(), this.comDate);
    this.todoList[this.userId][this.j].push({ work: this.task, completionDate: this.comDate, daysDelayed: this.delay });
    this.toggleForm[this.userId][this.j].push(false);
    this.isOpen[this.userId][this.j].push(true);
  }
  fade(i) {
    this.isOpen[this.userId][this.j][i] = !this.isOpen[this.j][i];
    setTimeout(() => {
      console.log(i);
      this.todoList[this.userId][this.j].splice(i, 1);
      this.toggleForm[this.userId][this.j].pop();
      this.isOpen[this.userId][this.j].splice(i, 1);
    }, 2000, i);
  }
  update(i) {
    this.toggleForm[this.userId][this.j][i] = true;
  }
  updateList(i) {
    this.todoList[this.userId][this.j][i].work = this.updateTask;
    this.todoList[this.userId][this.j][i].completionDate = this.updateComDate;
    this.todoList[this.userId][this.j][i].daysDelayed = this.dateDiff(new Date(), this.updateComDate);
    this.toggleForm[this.userId][this.j][i] = false;
  }
  delete(i) {
    this.todoList[this.userId][this.j].splice(i, 1);
    this.toggleForm[this.userId][this.j].pop();
  }
  openTask(j) {
    this.boolVal = true;
    // this.openDiffTask[j] = true;
    this.j = j;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router ,
   ) {}
  ngOnInit() {
    this.route.params.subscribe(paramsId => {
      this.userId = paramsId.id;
  });
  }
}
