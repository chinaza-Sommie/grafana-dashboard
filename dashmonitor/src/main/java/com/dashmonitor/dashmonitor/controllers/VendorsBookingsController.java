package com.dashmonitor.dashmonitor.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dashmonitor.dashmonitor.entities.VendorBookings;
import com.dashmonitor.dashmonitor.services.VendorBookingService;


@RestController
public class VendorsBookingsController {
    public VendorBookingService vendorBookingService;

    public VendorsBookingsController( VendorBookingService vendorBookingService){
        this.vendorBookingService = vendorBookingService;
    }


    // get, put, post, delete
    @GetMapping(value = "/api/vendor_booking", produces = "application/json")
    public List<VendorBookings> getAllVendorBookings(){
        return vendorBookingService.getAllVendorBookings();
    }

    @GetMapping(value = "/api/vendor_booking/{id}", produces = "application/json")
    public VendorBookings getVendorBookingById(@PathVariable Long id){
        return vendorBookingService.getVendorBookingById(id);
    }

    @PostMapping(value = "/api/vendor_booking", produces = "application/json")
    public VendorBookings createVendorBookingById(@RequestBody VendorBookings vendorBooking){
        return vendorBookingService.createVendorBooking(vendorBooking);
    }

    @PutMapping(value = "/api/vendor_booking/{id}", produces = "application/json")
    public VendorBookings updateVendorBookingById(@PathVariable Long id, @RequestBody VendorBookings vendorBooking){
        return vendorBookingService.updateVendorBooking(id, vendorBooking);
    }

    @DeleteMapping(value = "/api/vendor_booking/{id}", produces = "application/json")
    public void deleteVendorBookingById(@PathVariable Long id){
        vendorBookingService.deleteVendorBooking(id);
    }
}
