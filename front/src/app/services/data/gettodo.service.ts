import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/todo-list/todo-list.component';



@Injectable({
  providedIn: 'root'
})
export class GettodoService {
 

  constructor( private http : HttpClient
  ) { }

  getTodoData (username: string){
    const headers = { 'Authorization': 'Origin', 'My-Custom-Header': 'http://localhost:4200' };
    return this.http.get<Todo[]>(`http://localhost:8080/jpa/users/${username}/todos`);
  }

  deleteTodo(username : String , id : number) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  getTodoById(username : String , id : number){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  updateTodo(username : String , id : number , todo : Todo){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`,todo)
  }

  createTodo(username : String , todo : Todo){
    console.log(todo.discription)
    return this.http.post(`http://localhost:8080/users/${username}/todos`,todo)
  }
}