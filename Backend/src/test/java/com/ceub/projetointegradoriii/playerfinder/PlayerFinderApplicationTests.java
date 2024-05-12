package com.ceub.projetointegradoriii.playerfinder;

import com.ceub.projetointegradoriii.playerfinder.controller.AuthController;
import com.ceub.projetointegradoriii.playerfinder.security.TokenJWT;
import com.ceub.projetointegradoriii.playerfinder.service.UserService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class PlayerFinderApplicationTests {

	@Test
	void contextLoads() {
		testPasswordEncoder();
	}

	@Mock
	private UserService userService;

	@Mock
	private TokenJWT tokenJWT;

	@InjectMocks
	private AuthController authController;

	@Test
	public void testPasswordEncoder() {
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String rawPassword = "password";
		String encodedPassword = passwordEncoder.encode(rawPassword);

		assertTrue(passwordEncoder.matches(rawPassword, encodedPassword));
	}

}
