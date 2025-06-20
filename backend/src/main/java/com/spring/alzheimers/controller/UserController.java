package com.spring.alzheimers.controller;

import com.spring.alzheimers.dto.UpdateUserDto;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/student")
@RestController
public class UserController {

    @PatchMapping("/")
    public void updateUser(@RequestBody UpdateUserDto updateUserDto){

    }
}
