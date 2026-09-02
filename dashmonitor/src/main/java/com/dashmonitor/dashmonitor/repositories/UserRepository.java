package com.dashmonitor.dashmonitor.repositories;

import org.springframework.data.repository.ListCrudRepository;

import com.dashmonitor.dashmonitor.entities.Events;

public interface UserRepository extends ListCrudRepository<Events, Long> {

    
}