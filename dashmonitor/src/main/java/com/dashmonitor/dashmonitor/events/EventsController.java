package com.dashmonitor.dashmonitor.events;

import org.springframework.web.bind.annotation.RestController;

import com.dashmonitor.dashmonitor.AppCustomExceptionHandler;
import com.dashmonitor.dashmonitor.users.Users;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@RequestMapping
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173", "http://192.168.55.223:5173"})
public class EventsController {
    public EventsService eventsService;

    public EventsController(EventsService eventsService){
        this.eventsService = eventsService;
    }

    // check if i can do API/ events
    @GetMapping(value = "/api/events", produces = "application/json")
    public List<Events> getAllEvents() {
        return eventsService.getAllEvents();
    }

    @GetMapping(value = "/api/events/{id}", produces = "application/json")
    public Events getMethodName(@PathVariable Long id) {
        return eventsService.getEventsById(id);
    }
    
    @PostMapping(value = "/api/events", produces = "application/json")
    public Events createEvent(@RequestBody Events event) throws AppCustomExceptionHandler{
        return eventsService.createEvents(event);
    }
    
    @PutMapping(value = "/api/events/{id}", produces = "application/json")
    public Events updateEvent(@PathVariable Long id, @RequestBody Events event) throws AppCustomExceptionHandler{
        return eventsService.updateEvents(id, event);
    }

    @DeleteMapping(value = "/api/events/{id}", produces = "application/json")
    public void deleteEvent(@PathVariable Long id){
        
        eventsService.deleteEvents(id);
    }

    @GetMapping(value = "/api/events/user/{userId}", produces = "application/json")
    public List<Events> getEventsByUserId(@PathVariable Long userId) {
        return eventsService.getEventsByUserId(userId);
    }
}
