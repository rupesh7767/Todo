package com.example.rest_web_services;

public class helloworldbean {

    private String message;

    public helloworldbean(String message) {
        this.message = message;
    }

    public void setMessage(String message){
        this.message= message;
    }

    public String getMessage(){
        return this.message;
    }

    @Override
    public String toString(){
        return String.format("HellowordBean [message=%s]", message);
    }

}
