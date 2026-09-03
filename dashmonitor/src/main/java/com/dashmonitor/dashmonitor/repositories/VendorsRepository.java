package com.dashmonitor.dashmonitor.repositories;
import org.springframework.data.repository.ListCrudRepository;
import com.dashmonitor.dashmonitor.entities.Vendors;


public interface VendorsRepository extends ListCrudRepository<Vendors, Long> {
    
}
