package com.dashmonitor.dashmonitor.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import com.dashmonitor.dashmonitor.entities.VendorServices;
import com.dashmonitor.dashmonitor.services.VendorServicesService;

public class VendorServicesContoller {
    public VendorServicesService vendorServicesService;

    public VendorServicesContoller(VendorServicesService vendorServicesService){
        this.vendorServicesService = vendorServicesService;
    }

    @GetMapping( value= "/vendor_services", produces = "application/json")
    public List<VendorServices> getAllVendorServices(){
        return vendorServicesService.getAllVendorServices();
    }

    @GetMapping(value = "/vendor_services/{id}", produces = "application/json")
    public VendorServices getVendorServicesById(@RequestParam Long id) {
        return vendorServicesService.getVendorServicesById(id);
    }

    @PostMapping(value = "/vendor_services", produces = "application/json")
    public VendorServices createVendorServices(@RequestBody VendorServices vendorServices) { 
        return vendorServicesService.createVendorServices(vendorServices);
    }

    @PutMapping(value = "vendor_services/{id}", produces= "application/json")
    public VendorServices putMethodName(@PathVariable Long id, @RequestBody VendorServices vendorServices) {
        return vendorServicesService.updateVendorServices(id, vendorServices);
    }
    
    @DeleteMapping(value = "vendor_services/{id}", produces = "application/json")
    public void deleteUser(@PathVariable Long id){
        vendorServicesService.deleteVendorServices(id);
    }
}
