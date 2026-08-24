package com.dashmonitor.dashmonitor.entities;

import java.time.Instant;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="users")
public class Users {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long userId;
    public String first_name;
    public String last_name;
    public String email;
    public String password;
    public Instant created_at;

    public Users(){
        this("", "", "","", Instant.now());
    }
    public Users(String first_name, String last_name, String email, String password, Instant created_at ){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.created_at = created_at;
    }

    // users table setters

    public void setFirstName(String first_name){
        this.first_name = first_name;
    }

    public void setLastName(String last_name){
        this.last_name = last_name;

    }

    public void setEmail(String email){
        this.email = email;
    }

    public void setPassword(String password){
        this.password = password;
    }
     public void setCreatedAt(Instant created_at){
        this.created_at = created_at;
    }

    // getters

    public Long getId(){
        return userId;
    }

    public String getFirstName(){
        return this.first_name;
    }

    public String getLastName(){
        return this.last_name;
    }

    public String getEmail(){
        return this.email;
    }

    public String getPassword(){
        return this.password;
    }

    public Instant getCreatedAt(){
        return this.created_at;
    }
}
