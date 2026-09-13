package com.dashmonitor.dashmonitor.users;

import org.springframework.data.repository.ListCrudRepository;

import java.util.List;
import java.util.Optional;


public interface UserRepository extends ListCrudRepository<Users, Long> {

    public Optional<Users> findByEmail(String email);
}