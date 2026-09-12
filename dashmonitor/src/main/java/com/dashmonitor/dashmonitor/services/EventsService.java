package com.dashmonitor.dashmonitor.services;

import java.util.List;

// import org.apache.tomcat.util.buf.StringUtils;
import org.springframework.stereotype.Service;

import com.dashmonitor.dashmonitor.AppCustomExceptionHandler;
import com.dashmonitor.dashmonitor.entities.Events;
import com.dashmonitor.dashmonitor.entities.Users;
import com.dashmonitor.dashmonitor.repositories.EventsRepository;
import org.apache.commons.lang3.StringUtils;

@Service
public class EventsService {
    public EventsRepository eventsRepository;

    public EventsService(EventsRepository eventsRepository){
        this.eventsRepository = eventsRepository;
    }

    public List<Events> getAllEvents(){
        return eventsRepository.findAll();
    }

    public Events getEventsById(Long id){
        return eventsRepository.findById(id).get();
    }

    public Events createEvents(Events events) throws AppCustomExceptionHandler{
        if(events.getName() == null || events.getName().isBlank()
        || events.getEventType() == null || events.getEventType().isBlank()){
            throw new AppCustomExceptionHandler("these fields cannot be empty. Try again");
        }

        if(StringUtils.isNumeric(events.getName()) || StringUtils.isNumeric(events.getEventType())){
            throw new AppCustomExceptionHandler("Please, Name cannot be only numbers. Try again");
        }
        
        return eventsRepository.save(events);
    }

    public Events updateEvents(Long id, Events events) throws AppCustomExceptionHandler{
        Events existingEvents = eventsRepository.findById(id).get();

        if(events.getName() == null || events.getName().isBlank()
        || events.getEventType() == null || events.getEventType().isBlank()){
            throw new AppCustomExceptionHandler("these fields cannot be empty. Try again");
        }

        existingEvents.setName(events.getName());
        existingEvents.setEventType(events.getEventType());
        existingEvents.setStartDateTime(events.getStartDateTime());
        existingEvents.setEndDateTime(events.getEndDateTime());
        existingEvents.setTotalAmount(events.getTotalAmount());
        existingEvents.setGuestCount(events.getGuestCount());
        existingEvents.setStatus(events.getStatus());
        existingEvents.setUserId(events.getUser());
        
        return eventsRepository.save(existingEvents);
    }

    public void deleteEvents(Long id){
        eventsRepository.deleteById(id);
    }

    public List<Events> getEventsByUserId(Long userId){
        return eventsRepository.findByUser_UserId(userId);
    }
    // biome for code formatting in js (linter)
    // - GENRATE  A UUID MYSELF . ALSO ADD A PREFIX TO MAKE IT READABLE EVERYWHERE EG. EVENTS-UUID
    // PROCESS THE EVETS UNDER CREATE ENDPOINT 
    // USE TRANSACTIONS 
}