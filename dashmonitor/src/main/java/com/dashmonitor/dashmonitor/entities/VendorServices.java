package com.dashmonitor.dashmonitor.entities;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "vendorServices")
public class VendorServices {
    
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    public Long serviceId;
    public String name;   
    public String description;
    public String basePrice;
    public Instant created_at;
    public Instant updated_at;
    public String vendorsId; // change this to become a foreign key
    public String serviceCategoryId; // smae with this one as well

    public VendorServices(){
        this("", "", "", Instant.now(), Instant.now(), "", "" );
    }

    public VendorServices(String name, String description, String basePrice, Instant created_at, Instant updated_at, String vendorsId, String serviceCategoryId){
        this.name = name;
        this.description = description;
        this.basePrice = basePrice;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.vendorsId = vendorsId;
        this.serviceCategoryId = serviceCategoryId;
    }

    // setters

    public void setName(String name){
        this.name = name;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public void setBasePrice(String basePrice){
        this.basePrice = basePrice;
    }

    public void setCreated_at(Instant created_at){
        this.created_at = created_at;
    }

    public void setUpdated_at(Instant updated_at){
        this.updated_at = updated_at;
    }

    public void setVendorsId(String vendorsId){
        this.vendorsId = vendorsId;
    }

    public void setServiceCategoryId(String serviceCategoryId){
        this.serviceCategoryId = serviceCategoryId;
    }

    // getters

    public Long getServiceId(){
        return this.serviceId;
    }

    public String getName(){
        return this.name;
    }

    public String getDescription(){
        return this.description;
    }

    public String getBasePrice(){
        return this.basePrice;
    }

    public Instant getCreated_at(){
        return this.created_at;
    }

    public Instant getUpdated_at(){
        return this.updated_at;
    }

    public String getVendorsId(){
        return this.vendorsId;
    }

    public String getServiceCategoryId(){
        return this.serviceCategoryId;
    }

}
