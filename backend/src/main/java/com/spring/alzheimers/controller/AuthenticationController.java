package com.spring.alzheimers.controller;

import com.spring.alzheimers.dto.ApiResponseDto;
import com.spring.alzheimers.dto.LoginUserDto;
import com.spring.alzheimers.dto.RegisterUserDto;
import com.spring.alzheimers.dto.VerifyUserDto;
import com.spring.alzheimers.model.User;
import com.spring.alzheimers.responses.LoginResponse;
import com.spring.alzheimers.service.AuthenticationService;
import com.spring.alzheimers.service.JwtService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/auth")
@RestController
public class AuthenticationController {

    private final JwtService jwtService;

    private final AuthenticationService authenticationService;

    public AuthenticationController(
            JwtService jwtService,
            AuthenticationService authenticationService
    ){
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/signup")
    public ResponseEntity<ApiResponseDto> register(@RequestBody RegisterUserDto registerUserDto){
        authenticationService.signUp(registerUserDto);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(new ApiResponseDto("User created successfully"));
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginUserDto loginUserDto){
        User authenticatedUser = authenticationService.authenticate(loginUserDto);
        String jwtToken = jwtService.generateToken(authenticatedUser);
        String refreshToken = jwtService.generateRefreshToken(authenticatedUser);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(new LoginResponse(jwtToken, refreshToken, authenticatedUser.getId()));
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verifyUser(@RequestBody VerifyUserDto verifyUserDto){
        System.out.println("HELLO" + verifyUserDto.getEmail() + verifyUserDto.getVerificationCode());
        try{
            authenticationService.verifyUser(verifyUserDto);
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new ApiResponseDto("Account verified successfully"));
        } catch (RuntimeException e){
            System.out.println("HELLO" + verifyUserDto);
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/resend")
    public ResponseEntity<?> resendEmail(@RequestParam String email){
        try{
            authenticationService.resendVerificationCode(email);
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new ApiResponseDto("Email has been resent"));
        } catch (RuntimeException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/refresh")
    public ResponseEntity<?> refreshToken(){
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
