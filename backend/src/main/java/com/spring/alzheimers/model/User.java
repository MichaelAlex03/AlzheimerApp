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
    private Boolean enabled;

    @Getter
    @Setter
    @Column(name = "verification_code")
    private Integer verificationCode;

    @Getter
    @Setter
    @Column(name = "verification_expiration")
    private LocalDateTime verificationExpiration;

    @Getter
    @Setter
    @Column(name = "user_type")
    private String userType;

    public User(String firstName, String lastName, String email, String password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
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
