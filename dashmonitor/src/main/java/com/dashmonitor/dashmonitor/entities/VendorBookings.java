package com.dashmonitor.dashmonitor.entities;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "vendorBookings")
public class VendorBookings {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long bookingId;
    public String agreedPrice;
    public String startDateTime; // set this later to 1 hour before taking into account time for setup and setdown 
    public String bookingstatus;
    
    public String eventId;
    public String vendorServices;

    public Instant created_at; // this is needed because of changes to vendors status incase a vendor declines 
    public Instant updated_at;

    public VendorBookings(){
        this("", "", "", "", "", Instant.now(), Instant.now());
    }

    public VendorBookings(String agreedPrice, String startDateTime, String bookingstatus, String eventId, String vendorServices, Instant created_at, Instant updated_at){
        this.agreedPrice = agreedPrice;
        this.startDateTime = startDateTime;
        this.bookingstatus = bookingstatus;
        this.eventId = eventId;
        this.vendorServices = vendorServices;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    // setters

    public void setAgreedPrice(String agreedPrice){
        this.agreedPrice = agreedPrice;
    }

    public void setStartDateTime(String startDateTime){
        this.startDateTime = startDateTime;
    }

    public void setBookingstatus(String bookingstatus){
        this.bookingstatus = bookingstatus;
    }

    public void setEventId(String eventId){
        this.eventId = eventId;
    }

    public void setVendorServices(String vendorServices){
        this.vendorServices = vendorServices;
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

    public String getStartDateTime(){
        return this.startDateTime;
    }

    public String getBookingstatus(){
        return this.bookingstatus;
    }

    public String getEventId(){
        return this.eventId;
    }

    public String getVendorServices(){
        return this.vendorServices;
    }

    public Instant getCreated_at(){
        return this.created_at;
    }

    public Instant getUpdated_at(){
        return this.updated_at;
    }
}
