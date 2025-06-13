package com.spring.alzheimers.dto;

import lombok.Getter;

@Getter
public class RefreshDto {
    private final String refreshToken;
    private final String email;

    public RefreshDto(String refreshToken, String email){
        this.refreshToken = refreshToken;
        this.email = email;
    }
}
