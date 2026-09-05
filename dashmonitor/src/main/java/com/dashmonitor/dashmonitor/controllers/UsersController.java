package com.dashmonitor.dashmonitor.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dashmonitor.dashmonitor.entities.Users;
import com.dashmonitor.dashmonitor.services.UserService;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
public class UsersController {
    public UserService userService;

    public UsersController(UserService userService){

    }
    // get all users, get user by Id, 
    @GetMapping( value= "/users", produces = "application/json")
    public List<Users> getUsers(){
        return userService.getAllUsers();
    }

    @GetMapping(value = "/users/{id}", produces = "application/json")
    public Users getMethodName(@RequestParam Long id) {
        return userService.getUser(id);
    }

    @PostMapping(value = "/users", produces = "application/json")
    public Users createUser(@RequestBody Users user) {
        
        return userService.createUser(user);
    }

    @PutMapping(value = "users/{id}", produces= "application/json")
    public Users putMethodName(@PathVariable Long id, @RequestBody Users user) {
        return userService.updateUser(id, user);
    }
    
    @DeleteMapping(value = "users/{id}", produces = "application/json")
    public void deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
    }

}
