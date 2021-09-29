import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { GettodoService } from '../services/data/gettodo.service';

export class Todo {
  constructor(
    public id: number,
    public discription: string,
    public done: boolean,
    // public targetdate: Date,
    public date: Date
  ){}}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  constructor(private todoService: GettodoService,private router : Router) {
    
   }

message : String ="";

  ngOnInit() {
    
    this.refreshTodo();
    
  }

  refreshTodo() {
    this.todoService.getTodoData('rupesh').subscribe(
      response => {
        this.todos = response;
      }
    );
    
  }

  delete(id: any) {
    console.log("Delete Works");
    console.log(id);
    this.todoService.deleteTodo('rupesh', id).subscribe(
      response => {
        console.log("Delete");
        this.message="Todo Deleted Succesfully";
        this.refreshTodo()
      }
    )
  }

  update(id : number){
    console.log("ok")
    this.router.navigate(['todo',id])
  }


}
