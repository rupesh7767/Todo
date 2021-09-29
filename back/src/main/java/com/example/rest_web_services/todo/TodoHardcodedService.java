package com.example.rest_web_services.todo;

import java.time.LocalDateTime;
import java.util.ArrayList;

import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {

    private static List<todo> todos = new ArrayList();
    static LocalDateTime now = LocalDateTime.now();
    private static int id = 0;
    static {
        todos.add(new todo(++id,"Rupesh","want to", now ,false));
        todos.add(new todo(++id,"Rupesh","want to",now,false));
        todos.add(new todo(++id,"Rupesh","want to add",now,false));
        todos.add(new todo(++id,"Rupesh","want to add something",now,false));
    }

    public List<todo> getAllTodos(){
        return todos;

    }

    public todo deleteTodo(Long id){

         todo Todo = findtodo(id);
         if(Todo == null){
             return null;         
        }  
        if(todos.remove(Todo))
        return Todo;
        else return null;

    }

    public todo findtodo(long todoid) {
        for(todo todo:todos){
            if(todo.getId()==todoid)
                return todo;
        }
        return null;
        
    }

    // todo data = new todo(, userName, discription, targetDate, isDone)
    public todo addTodo(todo data){

        // todo data2 = findtodo(data.getId());
        // if(data2 != null){
        //     todos.add(data);
        // }
        if(data.getId() == -1 || data.getId() == 0){
            data.setId(++id);
            todos.add(data);
        }
        else{
            deleteTodo(data.getId());
            todos.add(data);
        }

        return data;
    }

    public todo updatTodo(){
        return null;

    }
}
