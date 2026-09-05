package com.dashmonitor.dashmonitor.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;

import com.dashmonitor.dashmonitor.entities.ServiceCategories;
import com.dashmonitor.dashmonitor.services.ServiceCategoriesService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
public class ServiceCategoriesController {
    public ServiceCategoriesService serviceCategoriesService;

    public ServiceCategoriesController(ServiceCategoriesService serviceCategoriesService){
        this.serviceCategoriesService = serviceCategoriesService;
    }

    @GetMapping(value="/service_categories", produces = "application/json")
    public List<ServiceCategories> getAllServiceCategories(){
        return serviceCategoriesService.getAllServiceCategories();
    }

    @GetMapping(value="/service_categories/{id}", produces = "application/json")
    public ServiceCategories getServiceCategoriesById(@PathVariable Long id) {
        return serviceCategoriesService.getServiceCategoriesById(id);
    }

    @PostMapping(value="/service_categories/{id}", produces = "application/json")
    public ServiceCategories createServiceCategories(@RequestBody ServiceCategories serviceCategories) {
        
        return serviceCategoriesService.createServiceCategories(serviceCategories);
    }
    
    @PutMapping(value="/service_categories/{id}", produces = "application/json")
    public ServiceCategories updateServiceCategoriesById(@PathVariable Long id, @RequestBody ServiceCategories serviceCategories) {
       return serviceCategoriesService.updateServiceCategories(id, serviceCategories);
    }

    @DeleteMapping(value="/service_categories/{id}", produces = "application/json")
    public void deleteServiceCategories(@PathVariable Long id){
        serviceCategoriesService.deleteServiceCategories(id);
    }
    // @RequestParam when to use it
}
