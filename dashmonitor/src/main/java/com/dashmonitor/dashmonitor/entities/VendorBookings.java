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
@Table(name = "vendorBookings")
public class VendorBookings {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long bookingId;
    public String agreedPrice;
    public Instant startDateTime; // set this later to 1 hour before taking into account time for setup and setdown 
    public String bookingstatus;
    
    @ManyToOne
    @JoinColumn(name = "eventId")
    public Events eventId;

    @ManyToOne
    @JoinColumn(name = "serviceId")
    public VendorServices serviceId;

    public Instant created_at; // this is needed because of changes to vendors status incase a vendor declines 
    public Instant updated_at;

    public VendorBookings(){
        this("", Instant.now(), "", null, null);
    }

    public VendorBookings(String agreedPrice, Instant startDateTime, String bookingstatus, Events eventId, VendorServices serviceId){
        this.agreedPrice = agreedPrice;
        this.startDateTime = startDateTime;
        this.bookingstatus = bookingstatus;
        this.eventId = eventId;
        this.serviceId = serviceId;
    }

    // setters
    @PrePersist
     public void onCreate(){
        this.created_at = Instant.now();
        this.updated_at = Instant.now();
    }

    @PreUpdate
    public void onUpdate(){
        this.updated_at = Instant.now();
    }

    public void setAgreedPrice(String agreedPrice){
        this.agreedPrice = agreedPrice;
    }

    public void setStartDateTime(Instant startDateTime){
        this.startDateTime = startDateTime;
    }

    public void setBookingstatus(String bookingstatus){
        this.bookingstatus = bookingstatus;
    }

    public void setEventId(Events eventId){
        this.eventId = eventId;
    }

    public void setVendorServices(VendorServices serviceId){
        this.serviceId = serviceId;
    }

    public void setCreated_at(Instant created_at){
        this.created_at = created_at;
    }

    public void setUpdated_at(Instant updated_at){
        this.updated_at = updated_at;
    }

    // getters

    public Long getBookingId(){
        return this.bookingId;
    }

    public String getAgreedPrice(){
        return this.agreedPrice;
    }

    public Instant getStartDateTime(){
        return this.startDateTime;
    }

    public String getBookingstatus(){
        return this.bookingstatus;
    }

    public Events getEventId(){
        return this.eventId;
    }

    public VendorServices getVendorServices(){
        return this.serviceId;
    }

    public Instant getCreated_at(){
        return this.created_at;
    }

    public Instant getUpdated_at(){
        return this.updated_at;
    }
}
