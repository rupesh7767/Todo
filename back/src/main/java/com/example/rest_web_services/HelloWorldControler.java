package com.example.rest_web_services;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldControler {

    @GetMapping(path = "/hello-world")
    public String helloworld(){
        return "Hello worldhfkjgfjxfhfdxhdt";
    }

    @GetMapping(path = "/hello-world-bean")
    public helloworldbean helloworldBean(){
        return new helloworldbean("Hello Rupesh");
    }

    @GetMapping(path = "/hello-world/path-variable/{name}")
	public helloworldbean helloWorldPathVariable(@PathVariable String name) {
		return new helloworldbean(String.format("Hello World, %s", name));
	}
    
}
