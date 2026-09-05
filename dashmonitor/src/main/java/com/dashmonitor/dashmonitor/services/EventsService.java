package com.dashmonitor.dashmonitor.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.dashmonitor.dashmonitor.entities.Events;
import com.dashmonitor.dashmonitor.repositories.EventsRepository;

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

    public Events createEvents(Events events){
        return eventsRepository.save(events);
    }

    public Events updateEvents(Long id, Events events){
        Events existingEvents = eventsRepository.findById(id).get();

        existingEvents.setName(events.getName());
        existingEvents.setEventType(events.getEventType());
        existingEvents.setStartDateTime(events.getStartDateTime());
        existingEvents.setEndDateTime(events.getEndDateTime());
        existingEvents.setTotalAmount(events.getTotalAmount());
        existingEvents.setGuestCount(events.getGuestCount());
        existingEvents.setStatus(events.getStatus());
        existingEvents.setUserId(events.getUserId());
        
        return eventsRepository.save(events);
    }

    public void deleteEvents(Long id){
        eventsRepository.deleteById(id);
    }
}