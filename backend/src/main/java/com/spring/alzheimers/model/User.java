package com.spring.alzheimers.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name="users")
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter
    private long id;

    @Getter
    @Setter
    @Column(nullable = false, name = "first_name")
    private String firstName;

    @Getter
    @Setter
    @Column(nullable = false, name = "last_name")
    private String lastName;

    @Getter
    @Setter
    @Column(unique = true, nullable = true)
    private String email;

    @Column(nullable = false)
    private String password;
    @Setter
    private Boolean enabled;

    @Getter
    @Setter
    @Column(name = "verification_code")
    private Integer verificationCode;

    @Getter
    @Setter
    @Column(name = "verification_expiration")
    private LocalDateTime verificationCodeExpiresAt;

    @Getter
    @Setter
    @Column(name = "user_type")
    private String userType;

    @Getter
    @Setter
    @Column(name = "refresh_token")
    private String refreshToken;

    @Getter
    @Setter
    @Column(name = "first_time")
    private Boolean firstTime;

    public User(){

    }

    public User(String firstName, String lastName, String email, String password, String userType, boolean firstTime){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.userType = userType;
        this.firstTime = firstTime;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of();
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }

}
