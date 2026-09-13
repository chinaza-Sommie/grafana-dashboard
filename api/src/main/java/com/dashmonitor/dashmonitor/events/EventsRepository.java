package com.dashmonitor.dashmonitor.events;

import java.util.List;

import org.springframework.data.repository.ListCrudRepository;

import com.dashmonitor.dashmonitor.users.Users;

public interface EventsRepository extends ListCrudRepository<Events, Long > {

    public List<Events> findByUser_UserId(Long userId);
}
