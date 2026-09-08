package com.dashmonitor.dashmonitor.entities;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
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
    public Instant createdAt;
    public Instant updatedAt;

    @ManyToOne
    @JoinColumn(name = "vendorsId")
    public Vendors vendorsId; 

    @ManyToOne
    @JoinColumn(name = "serviceCategoryId")
    public ServiceCategories serviceCategoryId; // smae with this one as well

    public VendorServices(){
        this("", "", "", Instant.now(), Instant.now(), null, null);
    }

    public VendorServices(String name, String description, String basePrice, Instant createdAt, Instant updatedAt, Vendors vendorsId, ServiceCategories serviceCategoryId){
        this.name = name;
        this.description = description;
        this.basePrice = basePrice;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.vendorsId = vendorsId;
        this.serviceCategoryId = serviceCategoryId;
    }

    // setters
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

    public void setBasePrice(String basePrice){
        this.basePrice = basePrice;
    }

    public void setVendorsId(Vendors vendorsId){
        this.vendorsId = vendorsId;
    }

    public void setServiceCategoryId(ServiceCategories serviceCategoryId){
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

    public Instant getCreatedAt(){
        return this.createdAt;
    }

    public Instant getUpdatedAt(){
        return this.updatedAt;
    }

    public Vendors getVendorsId(){
        return this.vendorsId;
    }

    public ServiceCategories getServiceCategoryId(){
        return this.serviceCategoryId;
    }

}
