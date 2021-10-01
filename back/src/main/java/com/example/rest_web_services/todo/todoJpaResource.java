package com.example.rest_web_services.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class todoJpaResource {

    @Autowired
    private TodoHardcodedService todoService;

    @Autowired
    private todoJpaRiposatry todojpaservice;
    
    @GetMapping("jpa/users/{username}/todos")
    public List<todo> getAllTodos(String username){
    	System.out.println();
    	return todojpaservice.findByUserName("rupesh");
    }

    
    @GetMapping("jpa/users/{username}/todos/{id}")
    public todo findtodo(@PathVariable String username , @PathVariable long id){
        todo Todo;
        System.out.println(id);
        return todojpaservice.findById(id).get();
        
    }
    
    @GetMapping("jpa/{id}")
    public todo findtodo(@PathVariable long id){
        todo Todo;
        System.out.println(id);
        return todojpaservice.findById(id).get();
        
    }

    @DeleteMapping("jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username , @PathVariable long id){   
        todo Todo = todoService.deleteTodo(id);
        if(Todo != null){
           return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();

    }

 

    @PutMapping("jpa/users/{username}/todos/{id}")
    public ResponseEntity<todo> updateTodo(@PathVariable String username , @PathVariable long id , @RequestBody todo data){
        todo updatedTodo =todoService.addTodo(data);
        //return new ResponseEntity<todo>(data,HttpStatus.OK);
         return ResponseEntity.ok(updatedTodo);
    }

    @PostMapping("jpa/users/{username}/todos")
    public ResponseEntity<Void> addTodo(@PathVariable String username, @RequestBody todo data){
        todo createdTodo =todoService.addTodo(data);
         URI uri= ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId())
                 .toUri();
         return ResponseEntity.created(uri).build();
         
    
    }



    
}
