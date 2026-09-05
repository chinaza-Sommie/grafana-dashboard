package com.dashmonitor.dashmonitor.services;

import java.util.List;

import com.dashmonitor.dashmonitor.entities.ServiceCategories;
import com.dashmonitor.dashmonitor.repositories.ServiceCategoriesRepository;

public class ServiceCategoriesService {
    public ServiceCategoriesRepository serviceCategoriesRepository;

    public ServiceCategoriesService(ServiceCategoriesRepository serviceCategoriesRepository){
        this.serviceCategoriesRepository = serviceCategoriesRepository;
    }

    // get all, get by id, create, update and delete

    public List<ServiceCategories> getAllServiceCategories(){
        return serviceCategoriesRepository.findAll();
    }

    public ServiceCategories getServiceCategoriesById(Long id){
        return serviceCategoriesRepository.findById(id).get();
    }

    public ServiceCategories createServiceCategories(ServiceCategories serviceCategories){
        return serviceCategoriesRepository.save(serviceCategories);
    }

    public ServiceCategories updateServiceCategories(Long id, ServiceCategories serviceCategories){
        ServiceCategories existingServiceCategories = serviceCategoriesRepository.findById(id).get();

        existingServiceCategories.setCategoryName(serviceCategories.getCategoryName());
        existingServiceCategories.setDescription(serviceCategories.getDescription());

        return serviceCategoriesRepository.save(existingServiceCategories);
    }

    public void deleteServiceCategories(Long id){
        serviceCategoriesRepository.deleteById(id);
    }

}
