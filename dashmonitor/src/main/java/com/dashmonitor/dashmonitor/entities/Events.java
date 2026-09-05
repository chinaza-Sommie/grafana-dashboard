package com.dashmonitor.dashmonitor.entities;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "events")
public class Events {
    
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    public Long eventId;
    public String name;
    public String eventType;
    public String startDateTime;
    public String endDateTime;
    public String totalAmount;
    public String guestCount;
    public String status;
    public Instant created_at;
    public Instant updated_at;
    public String userId;


    public Events(){
        this("", "", "","", "", "", "", Instant.now(), Instant.now(), "");
    }

    public Events(String name, String eventType, String startDateTime, String endDateTime, String totalAmount, String guestCount,
                    String status, Instant created_at, Instant updated_at, String userId){
        this.name = name;
        this.eventType = eventType;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.totalAmount = totalAmount;
        this.guestCount = guestCount;
        this.status = status;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.userId = userId;
    
    }

    // setters
    public void setName(String name){
        this.name = name;
    }

    public void setEventType(String eventType){
        this.eventType = eventType;
    }

    public void setStartDateTime(String startDateTime){
        this.startDateTime = startDateTime;
    }

    public void setEndDateTime(String endDateTime){
        this.endDateTime = endDateTime;
    }

    public void setTotalAmount(String totalAmount){
        this.totalAmount = totalAmount;
    }

    public void setGuestCount(String guestCount){
        this.guestCount = guestCount;
    }

    public void setStatus(String status){
       this.status = status;
    }

    public void setCreated_at(Instant created_at){
        this.created_at = created_at;
    }

    public void setUpdated_at(Instant updated_at){
        this.updated_at = updated_at;
    }

    public void setUserId(String userId){
        this.userId = userId;
    }

    // getters

    public Long getEventId(){
        return this.eventId;
    }

    public String getName(){
        return this.name;
    }

    public String getEventType(){
        return this.eventType; 
    }

    public String getStartDateTime(){
        return this.startDateTime ;
    }

    public String getEndDateTime(){
        return this.endDateTime;
    }

    public String getTotalAmount(){
        return this.totalAmount;
    }

    public String getGuestCount(){
        return this.guestCount;
    }

    public String getStatus(){
       return this.status;
    }

    public Instant getCreated_at(){
        return this.created_at;
    }

    public Instant setUpdated_at(){
        return this.updated_at;
    }

    public String getUserId(){
        return this.userId;
    }


}
