package com.spring.alzheimers.service;

import com.spring.alzheimers.model.User;
import com.spring.alzheimers.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public Optional<User> getUserInfo(String email){
        return userRepository.findByEmail(email);
    }
}
