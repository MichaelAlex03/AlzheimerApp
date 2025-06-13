package com.spring.alzheimers.controller;

import com.spring.alzheimers.dto.*;
import com.spring.alzheimers.model.User;
import com.spring.alzheimers.responses.LoginResponse;
import com.spring.alzheimers.responses.RefreshResponse;
import com.spring.alzheimers.responses.VerifyResponse;
import com.spring.alzheimers.service.AuthenticationService;
import com.spring.alzheimers.service.JwtService;
import com.spring.alzheimers.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RequestMapping("/auth")
@RestController
public class AuthenticationController {

    private final JwtService jwtService;

    private final AuthenticationService authenticationService;

    private final UserService userService;

    public AuthenticationController(
            JwtService jwtService,
            AuthenticationService authenticationService,
            UserService userService
    ){
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
        this.userService = userService;
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
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(new LoginResponse(
                        jwtToken,
                        authenticatedUser.getRefreshToken(),
                        authenticatedUser.getId(),
                        authenticatedUser.getEmail(),
                        authenticatedUser.isEnabled(),
                        authenticatedUser.getFirstName(),
                        authenticatedUser.getLastName()
                ));
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verifyUser(@RequestBody VerifyUserDto verifyUserDto){
        try{
            User user = authenticationService.verifyUser(verifyUserDto);
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new VerifyResponse(user.getId(), "User has been verified"));
        } catch (RuntimeException e){
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
    public ResponseEntity<RefreshResponse> refreshToken(@RequestParam String email, String refreshToken) {

        if(authenticationService.doesUserExist(email)){
            Optional<User> optionalUser = userService.getUserInfo(email);
            if(optionalUser.isPresent()){
                User user = optionalUser.get();
                boolean check = jwtService.isTokenValid(refreshToken, user);
                if(check){
                    String jwtToken = jwtService.generateToken(user);
                    return ResponseEntity
                            .status(HttpStatus.OK)
                            .body(new RefreshResponse(
                                    jwtToken,
                                    user.getId(),
                                    user.getEmail(),
                                    user.isEnabled(),
                                    user.getFirstName(),
                                    user.getLastName()
                            ));
                }
            }
        } else {
            return ResponseEntity
                    .badRequest()
                    .body(null);
        }

        return null;
    }


    @GetMapping("/logout")
    public ResponseEntity<?> logout(@RequestParam String email){
        try{
            authenticationService.logout(email);
            return ResponseEntity.ok(HttpStatus.OK);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }
}
