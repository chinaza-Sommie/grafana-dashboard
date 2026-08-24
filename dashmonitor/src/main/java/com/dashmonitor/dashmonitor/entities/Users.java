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

    public void set
}
