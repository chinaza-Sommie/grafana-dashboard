package com.dashmonitor.dashmonitor.repositories;

import org.springframework.data.repository.ListCrudRepository;

import com.dashmonitor.dashmonitor.entities.Users;
import java.util.List;
import java.util.Optional;


public interface UserRepository extends ListCrudRepository<Users, Long> {

    public Optional<Users> findByEmail(String email);
}