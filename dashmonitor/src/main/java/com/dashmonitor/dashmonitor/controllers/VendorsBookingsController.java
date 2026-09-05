package com.dashmonitor.dashmonitor.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.dashmonitor.dashmonitor.entities.VendorBookings;
import com.dashmonitor.dashmonitor.services.VendorBookingService;

public class VendorsBookingsController {
    public VendorBookingService vendorBookingService;

    public VendorsBookingsController( VendorBookingService vendorBookingService){
        this.vendorBookingService = vendorBookingService;
    }


    // get, put, post, delete
    @GetMapping(value = "/vendor_booking", produces = "application/json")
    public List<VendorBookings> getAllVendorBookings(){
        return vendorBookingService.getAllVendorBookings();
    }

    @GetMapping(value = "/vendor_booking/{id}", produces = "application/json")
    public VendorBookings getVendorBookingById(Long id){
        return vendorBookingService.getVendorBookingById(id);
    }

    @PostMapping(value = "/vendor_booking", produces = "application/json")
    public VendorBookings createVendorBookingById(VendorBookings vendorBooking){
        return vendorBookingService.createVendorBooking(vendorBooking);
    }

    @PutMapping(value = "/vendor_booking/{id}", produces = "application/json")
    public VendorBookings updateVendorBookingById(Long id, VendorBookings vendorBooking){
        return vendorBookingService.updateVendorBooking(id, vendorBooking);
    }

    @DeleteMapping(value = "/vendor_booking/{id}", produces = "application/json")
    public void deleteVendorBookingById(Long id){
        vendorBookingService.deleteVendorBooking(id);
    }
}
