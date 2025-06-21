package com.spring.alzheimers.service;

import com.spring.alzheimers.dto.UpdateUserDto;
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

    public void updateUser(UpdateUserDto updateUserDto){
        User user = userRepository.findByEmail(updateUserDto.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if(updateUserDto.getFirstTime() != null){
            user.setFirstTime(updateUserDto.getFirstTime());
        }

        if(updateUserDto.getEmail() != null){
            user.setEmail(updateUserDto.getEmail());
        }

        if(updateUserDto.getPassword() != null){
            user.setPassword(updateUserDto.getPassword());
        }

        if(updateUserDto.getFirstName() != null){
            user.setFirstName(updateUserDto.getFirstName());
        }

        if(updateUserDto.getLastName() != null){
            user.setLastName(updateUserDto.getLastName());
        }
    }
}
