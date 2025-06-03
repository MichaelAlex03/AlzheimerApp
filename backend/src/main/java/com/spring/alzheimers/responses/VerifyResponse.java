package com.spring.alzheimers.responses;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VerifyResponse {
    private long userId;
    private String message;

    public VerifyResponse(long userId, String message){
        this.userId = userId;
        this.message = message;
    }
}
