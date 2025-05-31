package com.spring.alzheimers.dto;

import lombok.Getter;

@Getter
public class ApiResponseDto {
    private String message;

    public ApiResponseDto(String message){
        this.message = message;
    }
}
