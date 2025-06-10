package com.spring.alzheimers.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RegisterProfessionalDto {

    private String organizationName;
    private String address;
    private String zipcode;
    private String city;
    private String state;
    private long userId;
}
