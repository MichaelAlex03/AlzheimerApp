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

    public LoginResponse(String token, String refreshToken, long userId, String email, boolean enabled){
        this.token = token;
        this.refreshToken = refreshToken;
        this.userId = userId;
        this.email = email;
        this.enabled = enabled;
    }
}
