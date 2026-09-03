package com.dashmonitor.dashmonitor.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.dashmonitor.dashmonitor.entities.Events;
import com.dashmonitor.dashmonitor.services.EventsService;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
public class EventsController {
    public EventsService eventsService;

    public EventsController(EventsService eventsService){
        this.eventsService = eventsService;
    }

    // check if i can do API/ events
    @GetMapping(value = "/events", produces = "application/json")
    public List<Events> getAllEvents() {
        return eventsService.getAllEvents();
    }

    @GetMapping(value = "/events/{id}", produces = "application/json")
    public Events getMethodName(@RequestParam Long id) {
        return eventsService.getEventsById(id);
    }
    
    @PostMapping(value = "/events", produces = "application/json")
    public Events createEvent(@RequestBody Events event) {
        return eventsService.createEvents(event);
    }
    
    @PutMapping(value = "/events/{id}", produces = "application/json")
    public Events updateEvent(@PathVariable Long id, @RequestBody Events event){
        return eventsService.updateEvents(id, event);
    }

    @DeleteMapping(value = "/events/{id}", produces = "application/json")
    public void deleteEvent(@PathVariable Long id){
        eventsService.deleteEvents(id);
    }
}
