package com.dashmonitor.dashmonitor.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dashmonitor.dashmonitor.AppCustomExceptionHandler;
// import com.dashmonitor.dashmonitor.ExceptionHandler;
import com.dashmonitor.dashmonitor.entities.Users;
import com.dashmonitor.dashmonitor.services.UserService;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
@RequestMapping
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173", "http://192.168.55.223:5173"})
public class UsersController {
    public UserService userService;

    public UsersController(UserService userService){
        this.userService = userService;
    }
    // get all users, get user by Id, 
    @GetMapping( value= "/api/users", produces = "application/json")
    public List<Users> getUsers(){
        return userService.getAllUsers();
    }

    @GetMapping(value = "/api/users/{id}", produces = "application/json")
    public Users getMethodName(@PathVariable Long id) {
        return userService.getUser(id);
    }

    @PostMapping(value = "/api/users", produces = "application/json")
    public Users createUser(@RequestBody Users user) throws AppCustomExceptionHandler{
        
        return userService.createUser(user);
    }

    @PutMapping(value = "/api/users/{id}", produces= "application/json")
    public Users putMethodName(@PathVariable Long id, @RequestBody Users user) {
        return userService.updateUser(id, user);
    }
    
    @DeleteMapping(value = "/api/users/{id}", produces = "application/json")
    public void deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
    }

    @PostMapping(value = "/api/login", produces = "application/json")
    public Users loginUser(@RequestBody Users user) throws AppCustomExceptionHandler{
        
        return userService.loginUser(user.getEmail(), user.getPassword());
    }
}
