package com.dashmonitor.dashmonitor.repositories;

import org.springframework.data.repository.ListCrudRepository;

import com.dashmonitor.dashmonitor.entities.ServiceCategories;

public interface ServiceCategoriesRepository extends ListCrudRepository<ServiceCategories, Long>{
    
}
