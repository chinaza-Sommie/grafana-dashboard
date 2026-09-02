package com.dashmonitor.dashmonitor.repositories;

import org.springframework.data.repository.ListCrudRepository;

import com.dashmonitor.dashmonitor.entities.Users;

public interface UserRepository extends ListCrudRepository<Users, Long> {

    
}