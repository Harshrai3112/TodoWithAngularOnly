import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/todos.service';
import { Todos } from 'src/app/todos.model';
@Component({
  selector: 'app-todo-db',
  templateUrl: './todo-db.component.html',
  styleUrls: ['./todo-db.component.css']
})
export class TodoDbComponent implements OnInit {
  todos: Todos[];
  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todosService.getTodos().subscribe(data => {
      console.log(data);
    });
  }
}
