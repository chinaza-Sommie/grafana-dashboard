package com.dashmonitor.dashmonitor.services;

import java.util.List;

import com.dashmonitor.dashmonitor.entities.Users;
import com.dashmonitor.dashmonitor.repositories.UserRepository;

public class UserService {
    public UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public List<Users> getAllUsers(){
        return userRepository.findAll();
    }

    public Users getUser(Long id){
        return userRepository.findById(id).get();
    }

    public Users createUser(Users user){
        return userRepository.save(user);
    }

    public Users updateUser(Long id, Users user){
        Users updateUserDetails = userRepository.findById(id).get();


        return updateUserDetails;
    }

    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }
}
