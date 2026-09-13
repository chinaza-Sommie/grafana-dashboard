package com.dashmonitor.dashmonitor.serviceCategories;

import java.util.List;

import org.springframework.stereotype.Service;

import com.dashmonitor.dashmonitor.AppCustomExceptionHandler;

@Service
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

    public ServiceCategories createServiceCategories(ServiceCategories serviceCategories) throws AppCustomExceptionHandler{
        if(serviceCategories.getCategoryName() == null || serviceCategories.getCategoryName().isBlank()
        || serviceCategories.getDescription() == null || serviceCategories.getDescription().isBlank()){
            throw new AppCustomExceptionHandler("these fields cannot be empty. Try again");
        }
        return serviceCategoriesRepository.save(serviceCategories);
    }

    public ServiceCategories updateServiceCategories(Long id, ServiceCategories serviceCategories) throws AppCustomExceptionHandler{
        
        if(serviceCategories.getCategoryName() == null || serviceCategories.getCategoryName().isBlank()
        || serviceCategories.getDescription() == null || serviceCategories.getDescription().isBlank()){
            throw new AppCustomExceptionHandler("these fields cannot be empty. Try again");
        }

        ServiceCategories existingServiceCategories = serviceCategoriesRepository.findById(id).get();

        existingServiceCategories.setCategoryName(serviceCategories.getCategoryName());
        existingServiceCategories.setDescription(serviceCategories.getDescription());

        return serviceCategoriesRepository.save(existingServiceCategories);
    }

    public void deleteServiceCategories(Long id){
        serviceCategoriesRepository.deleteById(id);
    }

}
