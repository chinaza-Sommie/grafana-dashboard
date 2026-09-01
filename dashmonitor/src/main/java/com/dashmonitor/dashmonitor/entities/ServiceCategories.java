package com.dashmonitor.dashmonitor.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name= "serviceCategories")
public class ServiceCategories {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long categoryId;
    public String categoryName;
    public String description;

    public ServiceCategories(){
        this("", "");
    }

    public ServiceCategories(String categoryName, String description){
        this.categoryName = categoryName;
        this.description = description;
    }

    // setters

    public void setCategoryName(String name){
        this.categoryName = name;
    }

    public void setDescription(String description){
        this.description = description;
    }

    // getters

    public Long getCategoryId(){
        return this.categoryId;
    }

    public String setCategoryName(){
        return this.categoryName ;
    }

    public String setDescription(){
        return this.description;
    }
}
