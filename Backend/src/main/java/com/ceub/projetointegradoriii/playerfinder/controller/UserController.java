package com.ceub.projetointegradoriii.playerfinder.controller;

import java.util.List;
import java.util.Map;

import com.ceub.projetointegradoriii.playerfinder.service.TokenService;
import com.ceub.projetointegradoriii.playerfinder.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.antlr.v4.runtime.Token;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.ceub.projetointegradoriii.playerfinder.entity.User;
import com.ceub.projetointegradoriii.playerfinder.security.TokenJWT;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = {"Authorization"})
@Tag(name = "Usuário", description = "Endpoints relacionados a usuários")
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private TokenService tokenService;

	@Operation(summary = "Obter todos os usuários", description = "Endpoint para obter todos os usuários cadastrados")
	@ApiResponse(responseCode = "200", description = "Lista de usuários retornada com sucesso")
	@GetMapping("/users")
	public ResponseEntity<List<User>> getAllUsers() {
		List<User> users = userService.getAllUsers();
		return new ResponseEntity<>(users, HttpStatus.OK);
	}

	// Endpoint to get a usuario by id
	@Operation(summary = "Obter usuário por ID", description = "Endpoint para obter um usuário pelo ID")
	@ApiResponse(responseCode = "200", description = "Usuário encontrado com sucesso")
	@ApiResponse(responseCode = "404", description = "Usuário não encontrado")
	@GetMapping("user/{id}")
	public ResponseEntity<User> getUserById(@Parameter(description = "ID do usuário a ser obtido", required = true) @PathVariable Long id) {
		User user = userService.getUserById(id);
		if (user != null) {
			return new ResponseEntity<>(user, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@Operation(summary = "Obter detalhes do usuário", description = "Endpoint para obter detalhes do usuário atualmente autenticado")
	@ApiResponse(responseCode = "200", description = "Detalhes do usuário retornados com sucesso")
	@ApiResponse(responseCode = "401", description = "Não autorizado")
	@GetMapping("/perfil")
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
	@Operation(summary = "Obter usuário por nome de usuário", description = "Endpoint para obter um usuário pelo nome de usuário")
	@ApiResponse(responseCode = "200", description = "Usuário encontrado com sucesso")
	@ApiResponse(responseCode = "404", description = "Usuário não encontrado")
	@GetMapping("/perfil/{username}")
	public ResponseEntity<User> getUserByUsername(@Parameter(description = "Nome de usuário a ser obtido", required = true) @PathVariable String username) {
		User usuario = userService.findByUsername(username);
		if (usuario != null) {
			return ResponseEntity.ok(usuario);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	// Endpoint to update a usuario
	@Operation(summary = "Editar usuário por nome de usuário", description = "Endpoint para editar um usuário pelo nome de usuário")
	@ApiResponse(responseCode = "200", description = "Usuário editado com sucesso")
	@ApiResponse(responseCode = "404", description = "Usuário não encontrado")
	@PutMapping("/perfil")
	public ResponseEntity<User> updateUser(@RequestHeader("Authorization") String authorizationHeader, @RequestBody User userUpdate) {
		String token = tokenService.extractTokenFromHeader(authorizationHeader);
		String username = tokenService.extractUsername(token);
		User existingUser = userService.findByUsername(username);

		if (existingUser != null) {
			return new ResponseEntity<>(userService.updateUser(username, userUpdate), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@Operation(summary = "Deletar usuário por nome de usuário", description = "Endpoint para deletar um usuário pelo nome de usuário")
	@ApiResponse(responseCode = "200", description = "Usuário deletado com sucesso")
	@ApiResponse(responseCode = "404", description = "Usuário não encontrado")
	@DeleteMapping("/perfil")
	public ResponseEntity<?> deleteUser(@RequestHeader("Authorization") String authorizationHeader) {
		try {
			String token = tokenService.extractTokenFromHeader(authorizationHeader);
			String username = tokenService.extractUsername(token);
			userService.deleteUserByUsername(username);
			return ResponseEntity.ok().build();
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Não foi possível excluir a conta.");
		}
	}
}
