package com.dashmonitor.dashmonitor.repositories;

import org.springframework.data.repository.ListCrudRepository;

import com.dashmonitor.dashmonitor.entities.VendorServices;

public interface VendorServicesRepository extends ListCrudRepository<VendorServices, Long> {
    
}
