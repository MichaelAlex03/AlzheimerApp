package com.spring.alzheimers.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "professionals")
public class Professional  {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "organization_name")
    private String organizationName;

    @Column
    private String address;

    @Column
    private String zipcode;

    @Column
    private String city;

    @Column
    private String state;

    @Column(name = "user_id")
    private long userId;


    public Professional(
            String organizationName,
            String address,
            String zipcode,
            String city,
            String state,
            long userId
    ){
        this.organizationName = organizationName;
        this.address = address;
        this.zipcode = zipcode;
        this.city = city;
        this.state = state;
        this.userId = userId;
    }


}
