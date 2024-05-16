package com.ceub.projetointegradoriii.playerfinder;

import com.ceub.projetointegradoriii.playerfinder.controller.AuthController;
import com.ceub.projetointegradoriii.playerfinder.entity.Jogo;
import com.ceub.projetointegradoriii.playerfinder.entity.User;
import com.ceub.projetointegradoriii.playerfinder.security.TokenJWT;
import com.ceub.projetointegradoriii.playerfinder.service.UserService;
import com.ceub.projetointegradoriii.playerfinder.service.relationship.FriendRequestService;
import com.ceub.projetointegradoriii.playerfinder.service.relationship.FriendshipService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;
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



	@Autowired
	private FriendshipService friendshipService;

	@Autowired
	private FriendRequestService friendRequestService;

	@Test
	public void testFriendshipDetectionAfterAcceptingRequest() {
		// Cria dois usuários

		List<Jogo> jogos = Arrays.asList(
		);
		User user1 = new User(1l,"senha123", "senha123", "senha123", "senha123", "senha123", "senha123", "Fulano de Tal", "fulano", "fulano@example.com", "1990-01-01", "Brasileiro", "DF", jogos);
		User user2= new User(2l,"senha123123","senha123", "senha123", "senha123", "senha123", "senha123",  "Fulano de Tal123", "fulano123", "fulano@example.com", "1990-01-01", "Brasileiro", "DF", jogos);

		userService.save(user1);
		userService.save(user2);

		// Envia um pedido de amizade de user1 para user2
		friendRequestService.sendFriendshipRequest(user1, user2);

		// Aceita o pedido de amizade
		friendRequestService.acceptFriendshipRequest(1L);

		// Verifica se a amizade foi detectada corretamente
		assertTrue(friendshipService.hasFriendship(user1.getId(), user2.getId()));

		// Tenta enviar outro pedido de amizade de user1 para user2
		friendRequestService.sendFriendshipRequest(user1, user2);

		// Verifica se o sistema detecta corretamente que já há uma amizade entre os usuários
		assertFalse(friendRequestService.hasPendingFriendRequest(user1.getId(), user2.getId()));
	}

}
