package com.dashmonitor.dashmonitor.serviceCategories;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@RequestMapping
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173", "http://192.168.55.223:5173"})
public class ServiceCategoriesController {
    public ServiceCategoriesService serviceCategoriesService;

    public ServiceCategoriesController(ServiceCategoriesService serviceCategoriesService){
        this.serviceCategoriesService = serviceCategoriesService;
    }

    @GetMapping(value="/api/service_categories", produces = "application/json")
    public List<ServiceCategories> getAllServiceCategories(){
        return serviceCategoriesService.getAllServiceCategories();
    }

    @GetMapping(value="/api/service_categories/{id}", produces = "application/json")
    public ServiceCategories getServiceCategoriesById(@PathVariable Long id) {
        return serviceCategoriesService.getServiceCategoriesById(id);
    }

    @PostMapping(value="/api/service_categories", produces = "application/json")
    public ServiceCategories createServiceCategories(@RequestBody ServiceCategories serviceCategories) {
        
        return serviceCategoriesService.createServiceCategories(serviceCategories);
    }
    
    @PutMapping(value="/api/service_categories/{id}", produces = "application/json")
    public ServiceCategories updateServiceCategoriesById(@PathVariable Long id, @RequestBody ServiceCategories serviceCategories) {
       return serviceCategoriesService.updateServiceCategories(id, serviceCategories);
    }

    @DeleteMapping(value="/api/service_categories/{id}", produces = "application/json")
    public void deleteServiceCategories(@PathVariable Long id){
        serviceCategoriesService.deleteServiceCategories(id);
    }
   
}
