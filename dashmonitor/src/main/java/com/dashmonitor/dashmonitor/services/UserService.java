package com.dashmonitor.dashmonitor.services;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

import javax.management.RuntimeErrorException;

import com.dashmonitor.dashmonitor.AppCustomExceptionHandler;
// import com.dashmonitor.dashmonitor.ExceptionHandler;
import com.dashmonitor.dashmonitor.entities.Users;
import com.dashmonitor.dashmonitor.repositories.UserRepository;

@Service
public class UserService {
    public UserRepository userRepository;
    public final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder){
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<Users> getAllUsers(){
        return userRepository.findAll();
    }

    public Users getUser(Long id){
        return userRepository.findById(id).get();
    }

    public Users createUser(Users user) throws AppCustomExceptionHandler{
        // hash the password
        if(userRepository.findByEmail(user.getEmail()).isPresent()){
            throw new AppCustomExceptionHandler("User with this email already exists. Try again");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(user);
    }

    public Users updateUser(Long id, Users user){
        Users existingUser = userRepository.findById(id).get();

        existingUser.setFirstName(user.getFirstName());
        existingUser.setLastName(user.getLastName());
        existingUser.setEmail(user.getEmail());
        existingUser.setPassword(user.getPassword());

        return userRepository.save(existingUser);
    }

    public void deleteUser(Long id) {
        
        userRepository.deleteById(id);
    }

    public Users loginUser(String email, String password) throws AppCustomExceptionHandler {
        Optional<Users> user = userRepository.findByEmail(email);

        if(user.isEmpty()){
            throw new AppCustomExceptionHandler("user does not exist. Please check details and try again");
        }

        Users currentUser = user.get();
        if(!passwordEncoder.matches(password, currentUser.password)){
            throw new AppCustomExceptionHandler("passwords do not match");
        }
    
        return currentUser;
    }
}
