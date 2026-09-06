package com.dashmonitor.dashmonitor.entities;

import java.time.Instant;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;

@Entity
@Table(name="users")
public class Users {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //make these feilds private later on
    public Long userId;
    public String firstName;
    public String lastName;
    public String email;
    public String password;
    public Instant createdAt;

    public Users(){
        this("", "", "","");
    }
    public Users(String firstName, String lastName, String email, String password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        // this.createdAt = createdAt;
    }

    // users table setters
    @PrePersist
    public void setCreatedAt(){
        this.createdAt = Instant.now();
    }

    public void setFirstName(String firstName){
        this.firstName = firstName;
    }

    public void setLastName(String lastName){
        this.lastName = lastName;

    }

    public void setEmail(String email){
        this.email = email;
    }

    public void setPassword(String password){
        this.password = password;
    }
    // getters

    public Long getUserId(){
        return userId;
    }

    public String getFirstName(){
        return this.firstName;
    }

    public String getLastName(){
        return this.lastName;
    }

    public String getEmail(){
        return this.email;
    }

    public String getPassword(){
        return this.password;
    }

    public Instant getCreatedAt(){
        return this.createdAt;
    }
}
