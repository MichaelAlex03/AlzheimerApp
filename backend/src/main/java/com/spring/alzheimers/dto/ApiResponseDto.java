package com.spring.alzheimers.dto;

import lombok.Getter;

@Getter
public class ApiResponseDto {
    private final String message;

    public ApiResponseDto(String message){
        this.message = message;
    }
}
