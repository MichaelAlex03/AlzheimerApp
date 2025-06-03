package com.spring.alzheimers.responses;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginResponse {

    private String token;
    private String refreshToken;
    private long userId;

    public LoginResponse(String token, String refreshToken, long userId){
        this.token = token;
        this.refreshToken = refreshToken;
        this.userId = userId;
    }
}
