package com.spring.alzheimers.responses;

import lombok.Getter;

@Getter
public class RefreshResponse {

    private final String token;
    private final long userId;
    private final String email;
    private final boolean enabled;
    private final String firstName;
    private final String lastName;
    private final boolean firstTime;

    public RefreshResponse(
            String token,
            long userId,
            String email,
            boolean enabled,
            String firstName,
            String lastName,
            boolean firstTime
    ){
        this.token = token;
        this.userId = userId;
        this.email = email;
        this.enabled = enabled;
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstTime = firstTime;
    }
}
