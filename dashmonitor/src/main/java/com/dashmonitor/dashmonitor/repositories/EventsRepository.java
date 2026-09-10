package com.dashmonitor.dashmonitor.repositories;

import java.util.List;

import org.springframework.data.repository.ListCrudRepository;

import com.dashmonitor.dashmonitor.entities.Events;
import com.dashmonitor.dashmonitor.entities.Users;

public interface EventsRepository extends ListCrudRepository<Events, Long > {

    public List<Events> findByUser_UserId(Long userId);
}
