package com.spring.alzheimers.responses;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginResponse {

    private String token;
    private String refreshToken;
    private long userId;
    private String email;
    private boolean enabled;
    private String firstName;
    private String lastName;

    public LoginResponse(
            String token,
            String refreshToken,
            long userId,
            String email,
            boolean enabled,
            String firstName,
            String lastName
    ){
        this.token = token;
        this.refreshToken = refreshToken;
        this.userId = userId;
        this.email = email;
        this.enabled = enabled;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
