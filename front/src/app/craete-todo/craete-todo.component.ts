import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GettodoService } from '../services/data/gettodo.service';
import { Todo } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-craete-todo',
  templateUrl: './craete-todo.component.html',
  styleUrls: ['./craete-todo.component.css']
})
export class CraeteTodoComponent implements OnInit {

  data !: Todo;


  date !: Date;
  discription : string="";
  constructor( private todoservice : GettodoService , private router : Router) { }

  ngOnInit(): void {
  }

  createTodo(){
    
    // console.log(this.discription)
    // console.log(this.discription)
    // console.log(this.discription)
      this.data=new Todo(0,this.discription,false,this.date);
      console.log(this.data.discription)
      this.todoservice.createTodo("rupesh",this.data).subscribe(
        response => {
          console.log(response)
          this.router.navigate(["todos"])
        }
      )
  }
}
