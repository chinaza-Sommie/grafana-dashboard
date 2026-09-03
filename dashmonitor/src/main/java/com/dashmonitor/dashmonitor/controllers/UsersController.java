package com.dashmonitor.dashmonitor.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.dashmonitor.dashmonitor.services.UserService;

@RestController
public class UsersController {
    public UserService userService;

    public UsersController(UserService userService){

    }

    
}
