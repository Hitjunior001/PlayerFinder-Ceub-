package com.ceub.projetointegradoriii.playerfinder.controller;

import java.util.List;
import java.util.Map;

import com.ceub.projetointegradoriii.playerfinder.service.TokenService;
import com.ceub.projetointegradoriii.playerfinder.service.UserService;
import org.antlr.v4.runtime.Token;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.ceub.projetointegradoriii.playerfinder.entity.User;
import com.ceub.projetointegradoriii.playerfinder.security.TokenJWT;

@RestController
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private TokenService tokenService;

	@GetMapping("/users")
	public ResponseEntity<List<User>> getAllUsers() {
		List<User> users = userService.getAllUsers();
		return new ResponseEntity<>(users, HttpStatus.OK);
	}

	// Endpoint to get a usuario by id
	@GetMapping("user/{id}")
	public ResponseEntity<User> getUserById(@PathVariable Long id) {
		User user = userService.getUserById(id);
		if (user != null) {
			return new ResponseEntity<>(user, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@GetMapping("/user")
	public ResponseEntity<User> getUserDetails(@RequestHeader("Authorization") String authorizationHeader) {
		String token = tokenService.extractTokenFromHeader(authorizationHeader);
		if (token == null) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
		String username = tokenService.extractUsername(token);
		if (username == null) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
		User user = userService.findByUsername(username);
		if (user == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(user);
	}
	@GetMapping("/perfil/{username}")
	public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
		User usuario = userService.findByUsername(username);
		if (usuario != null) {
			return ResponseEntity.ok(usuario);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

//	// Endpoint to update a usuario
//	@PutMapping("user/{id}")
//	public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
//		User updatedUser = customUserDetailsService.updateUser(id, user);
//		if (updatedUser != null) {
//			return new ResponseEntity<>(updatedUser, HttpStatus.OK);
//		} else {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//	}
//
//	// Endpoint to delete a usuario
//	@DeleteMapping("user/{id}")
//	public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
//		customUserDetailsService.deleteUser(id);
//		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//	}
}
