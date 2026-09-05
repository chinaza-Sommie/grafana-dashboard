package com.dashmonitor.dashmonitor.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import com.dashmonitor.dashmonitor.entities.Vendors;
import com.dashmonitor.dashmonitor.services.VendorsService;

public class VendorsController {
    public VendorsService vendorsService;

    public VendorsController(VendorsService vendorsService){
        this.vendorsService = vendorsService;
    }

    @GetMapping( value= "/vendors", produces = "application/json")
    public List<Vendors> getAllVendors(){
        return vendorsService.getAllVendors() ;
    }

    @GetMapping(value = "/vendors/{id}", produces = "application/json")
    public Vendors getVendorById(@RequestParam Long id) {
        return vendorsService.getVendorsById(id);
    }

    @PostMapping(value = "/vendors", produces = "application/json")
    public Vendors createVendor(@RequestBody Vendors vendor) { 
        return vendorsService.createVendors(vendor);
    }

    @PutMapping(value = "vendors/{id}", produces= "application/json")
    public Vendors updateVendor(@PathVariable Long id, @RequestBody Vendors vendor) {
        return vendorsService.updateVendors(id, vendor);
    }
    
    @DeleteMapping(value = "vendors/{id}", produces = "application/json")
    public void deleteUser(@PathVariable Long id){
        vendorsService.deleteVendors(id);
    }
}
