package com.ceub.projetointegradoriii.playerfinder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class PlayerFinderApplication {

	public static void main(String[] args) {
		SpringApplication.run(PlayerFinderApplication.class, args);
	}


}
