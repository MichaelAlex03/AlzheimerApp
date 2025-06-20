package com.spring.alzheimers.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateUserDto {
    private String firstName;
    private String lastName;
    private String password;
    private Boolean firstTime;
    private String email;
}
