package com.dashmonitor.dashmonitor.entities;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;

@Entity
@Table(name = "vendors")
public class Vendors {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long vendorsId;
    public String name;
    public String description;
    public String email;
    public String phone;
    public String address;
    public String city;
    public String status;
    public Instant createdAt;
    public Instant updatedAt;

    public Vendors(){
        this("", "", "", "", "", "", "");
    }

    public Vendors(String name, String description, String email, String phone, String address, String city, String status){
        this.name = name;
        this.description = description;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.status = status;
    }

    //setters
    @PrePersist
     public void onCreate(){
        this.createdAt = Instant.now();
        this.updatedAt = Instant.now();
    }

    @PreUpdate
    public void onUpdate(){
        this.updatedAt = Instant.now();
    }
    

    public void setName(String name){
        this.name = name;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public void setPhone(String phone){
        this.phone = phone;
    }

    public void setAddress(String address){
        this.address = address;
    }

    public void setCity(String city){
        this.city = city;
    }

    public void setStatus(String status){
        this.status = status;
    }

    // getters

    public String getName(){
        return this.name;
    }

    public String getDescription(){
        return this.description;
    }

    public String getEmail(){
        return this.email;
    }

    public String getPhone(){
        return this.phone;
    }

    public String getAddress(){
        return this.address;
    }

    public String getCity(){
        return this.city;
    }

    public String getStatus(){
        return this.status;
    }

    public Instant getCreatedAt(){
        return this.createdAt;
    }

    public Instant getUpdatedAt(){
        return this.updatedAt;
    }
}
