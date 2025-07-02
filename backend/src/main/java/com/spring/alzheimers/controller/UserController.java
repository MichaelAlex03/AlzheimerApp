package com.spring.alzheimers.controller;

import com.spring.alzheimers.dto.ApiResponseDto;
import com.spring.alzheimers.dto.UpdateUserDto;
import com.spring.alzheimers.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/student")
@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @PatchMapping
    public ResponseEntity<ApiResponseDto> updateUser(@RequestBody UpdateUserDto updateUserDto){
        System.out.println("Hello");
        userService.updateUser(updateUserDto);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(new ApiResponseDto("User updated"));
    }
}
