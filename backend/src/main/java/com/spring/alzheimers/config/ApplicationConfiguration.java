package com.spring.alzheimers.config;

import com.spring.alzheimers.repository.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetailsService;

@Configuration
public class ApplicationConfiguration {
    private final UserRepository userRepository;

    public ApplicationConfiguration(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Bean
    UserDetailsService userDetailsService(){
        return username -> userRepository.findBy
    }
}
