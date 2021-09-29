import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GettodoService } from '../services/data/gettodo.service';
import { Todo } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todobyid',
  templateUrl: './todobyid.component.html',
  styleUrls: ['./todobyid.component.css']
})
export class TodobyidComponent implements OnInit {
  todo!: Todo;
  id : number = 0;


  constructor(
    private todoservice : GettodoService,
    private rout : ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.id = this.rout.snapshot.params['id'];
    this.todo=new Todo(1,'dff',false,new Date());
    this.todoservice.getTodoById("rupesh" , this.id).subscribe(
      data=>{
        this.todo = data;
        console.log(this.todo)
      }

    )
  }

  save(){

    console.log(this.todo.date)
    this.todoservice.updateTodo("rupesh",this.id,this.todo).subscribe(
      data=>{
        console.log(data);
      }
    )
  }
}
