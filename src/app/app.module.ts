import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiffWorksComponent } from './diff-works/diff-works.component';
import { RouterModule} from '@angular/router';
import { TableCRUDComponent } from './table-crud/table-crud.component';
import { TodoDbComponent } from './todo-db/todo-db.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    DiffWorksComponent,
    TableCRUDComponent,
    TodoDbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'todo/:id', component: TodoListComponent },
      { path: ' ', component: DiffWorksComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
