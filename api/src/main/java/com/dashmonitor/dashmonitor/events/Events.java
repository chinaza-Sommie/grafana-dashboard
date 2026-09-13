package com.dashmonitor.dashmonitor.events;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

import com.dashmonitor.dashmonitor.users.Users;
import com.dashmonitor.dashmonitor.vendorBookings.VendorBookings;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "events")
public class Events {
    
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    public Long eventId;
    public String name;
    public String eventType;
    public Instant startDateTime;
    public Instant endDateTime;
    public String totalAmount; // CHABGE TO INTEGER ( IF DEING RITH ONE CURRENCY)
    public Integer guestCount;
    public String status;
    public Instant created_at;
    public Instant updated_at;

    @ManyToOne
    @JoinColumn(name = "user_id")
    public Users user;

    // @OneToMany(mappedBy = "eventId",cascade = CascadeType.ALL,orphanRemoval = true) 
    // public List<VendorBookings> vendorBookings;
    

    public Events(){
        this("", "", Instant.now(),Instant.now(), "", 0, "", null); // why null here?
    }

    public Events(String name, String eventType, Instant startDateTime, Instant endDateTime, String totalAmount, Integer guestCount,
                    String status, Users user){
        this.name = name;
        this.eventType = eventType;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.totalAmount = totalAmount;
        this.guestCount = guestCount;
        this.status = status;
        this.user = user;
    
    }

    @PrePersist
     public void onCreate(){
        this.created_at = Instant.now();
        this.updated_at = Instant.now();
    }

    @PreUpdate
    public void onUpdate(){
        this.updated_at = Instant.now();
    }

    // setters
    public void setName(String name){
        this.name = name;
    }

    public void setEventType(String eventType){
        this.eventType = eventType;
    }

    public void setStartDateTime(Instant startDateTime){
        this.startDateTime = startDateTime;
    }

    public void setEndDateTime(Instant endDateTime){
        this.endDateTime = endDateTime;
    }

    public void setTotalAmount(String totalAmount){
        this.totalAmount = totalAmount;
    }

    public void setGuestCount(Integer guestCount){
        this.guestCount = guestCount;
    }

    public void setStatus(String status){
       this.status = status;
    }

    public void setUserId(Users user){
        this.user = user;
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

    public Instant getStartDateTime(){
        return this.startDateTime ;
    }

    public Instant getEndDateTime(){
        return this.endDateTime;
    }

    public String getTotalAmount(){
        return this.totalAmount;
    }

    public Integer getGuestCount(){
        return this.guestCount;
    }

    public String getStatus(){
       return this.status;
    }

    public Instant getCreated_at(){
        return this.created_at;
    }

    public Instant getUpdated_at(){
        return this.updated_at;
    }

    public Users getUser(){
        return this.user;
    }

//     testdata:
//     {
//   "email": "china@gmail.com",
//   "password": "cccccc"
// }

}
