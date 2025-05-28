package com.spring.alzheimers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class AlzheimersApplication {


	public static void main(String[] args) {

		Dotenv dotenv = Dotenv.load();
		System.setProperty("spring.datasource.url", dotenv.get("SPRING_DATASOURCE_URL"));
		System.setProperty("spring.datasource.username", dotenv.get("SPRING_DATASOURCE_USERNAME"));
		System.setProperty("spring.datasource.password", dotenv.get("SPRING_DATASOURCE_PASSWORD"));
		System.setProperty("security.jwt.secret", dotenv.get("JWT_SECRET_KEY"));
		System.setProperty("security.jwt.refresh", dotenv.get("JWT_REFRESH_KEY"));
		System.setProperty("spring.mail.username", dotenv.get("SUPPORT_EMAIL"));
		System.setProperty("spring.mail.password", dotenv.get("APP_PASSWORD"));
		
		SpringApplication.run(AlzheimersApplication.class, args);
	}

}
