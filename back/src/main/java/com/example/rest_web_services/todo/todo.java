package com.example.rest_web_services.todo;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class todo {

    @Id
    @GeneratedValue
    private Long id;

    private String userName;
    private String discription;
    // private Date targetDate;
    private boolean isDone;
    private LocalDateTime date;

    public LocalDateTime getDate() {
        return date;
    }
    public void setDate(LocalDateTime date) {
        this.date = date;
    }
    public todo(Long id, String userName, String discription, LocalDateTime targetDate, boolean isDone){
        super();
        this.id =id;
        this.userName=userName;
        this.discription=discription;
        this.setDate(targetDate);
        this.isDone=isDone;

    }

    public Long getId() {
        return id;
    }
    public boolean isDone() {
        return isDone;
    }
    public void setDone(boolean isDone) {
        this.isDone = isDone;
    }
    // public Date getTargetDate() {
    //     return targetDate;
    // }
    // public void setTargetDate(Date targetDate) {
    //     this.targetDate = targetDate;
    // }
    public String getDiscription() {
        return discription;
    }
    public void setDiscription(String discription) {
        this.discription = discription;
    }
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
    public void setId(Long id) {
        this.id = id;
    }
    
}
