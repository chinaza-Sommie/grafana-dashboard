package com.dashmonitor.dashmonitor.vendors;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173", "http://192.168.55.223:5173"})
public class VendorsController {
    public VendorsService vendorsService;

    public VendorsController(VendorsService vendorsService){
        this.vendorsService = vendorsService;
    }

    @GetMapping( value= "/api/vendors", produces = "application/json")
    public List<Vendors> getAllVendors(){
        return vendorsService.getAllVendors() ;
    }

    @GetMapping(value = "/api/vendors/{id}", produces = "application/json")
    public Vendors getVendorById(@RequestParam Long id) {
        return vendorsService.getVendorsById(id);
    }

    @PostMapping(value = "/api/vendors", produces = "application/json")
    public Vendors createVendor(@RequestBody Vendors vendor) { 
        return vendorsService.createVendors(vendor);
    }

    @PutMapping(value = "/api/vendors/{id}", produces= "application/json")
    public Vendors updateVendor(@PathVariable Long id, @RequestBody Vendors vendor) {
        return vendorsService.updateVendors(id, vendor);
    }
    
    @DeleteMapping(value = "/api/vendors/{id}", produces = "application/json")
    public void deleteUser(@PathVariable Long id){
        vendorsService.deleteVendors(id);
    }
}
