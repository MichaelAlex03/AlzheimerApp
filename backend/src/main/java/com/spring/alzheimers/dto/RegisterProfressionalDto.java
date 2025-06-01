package com.spring.alzheimers.dto;

import lombok.Getter;

@Getter
public class RegisterProfressionalDto {

    private String organizationName;
    private String address;
    private String zipcode;
    private String city;
    private String state;
    private long userId;
}
