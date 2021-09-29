import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CraeteTodoComponent } from './craete-todo/craete-todo.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodobyidComponent } from './todobyid/todobyid.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "welcome/:name", component: WelcomeComponent },
  { path: "login", component: LoginComponent },
  { path: "todos" , component:TodoListComponent},
  { path: "logout" , component:LogoutComponent},
  { path: "todo/:id", component: TodobyidComponent},
  { path: "addtodo", component: CraeteTodoComponent},
  {  path: "**", component: ErrorComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
