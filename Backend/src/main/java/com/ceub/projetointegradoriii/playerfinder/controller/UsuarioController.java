package com.ceub.projetointegradoriii.playerfinder.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


import com.ceub.projetointegradoriii.playerfinder.entity.Usuario;
import com.ceub.projetointegradoriii.playerfinder.service.UsuarioService;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;

	//Endpoint to login usuario
	private String jwtSecret= "s3cret";

	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@RequestBody Map<String, String> loginRequest) {
		String username = loginRequest.get("username");
		String password = username;

		Usuario user = usuarioService.findByUsername(username);
		if (user == null || !username.equals(password)) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciais inválidas");
		}

		// Gera o token JWT
		String token = Jwts.builder()
				.setSubject(user.getUsername())
				.signWith(SignatureAlgorithm.HS512, jwtSecret)
				.compact();

		return ResponseEntity.ok(token);
	}

	// Endpoint to create a new usuario
	@PostMapping
	public ResponseEntity<Usuario> createUsuario(@RequestBody Usuario usuario) {
		Usuario createdUsuario = usuarioService.createUsuario(usuario);
		return new ResponseEntity<>(createdUsuario, HttpStatus.CREATED);
	}

	// Endpoint to get all usuarios
	@GetMapping
	public ResponseEntity<List<Usuario>> getAllUsuarios() {
		List<Usuario> usuarios = usuarioService.getAllUsuarios();
		return new ResponseEntity<>(usuarios, HttpStatus.OK);
	}

	// Endpoint to get a usuario by id
	@GetMapping("/{id}")
	public ResponseEntity<Usuario> getUsuarioById(@PathVariable Long id) {
		Usuario usuario = usuarioService.getUsuarioById(id);
		if (usuario != null) {
			return new ResponseEntity<>(usuario, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	// Endpoint to update a usuario
	@PutMapping("/{id}")
	public ResponseEntity<Usuario> updateUsuario(@PathVariable Long id, @RequestBody Usuario usuario) {
		Usuario updatedUsuario = usuarioService.updateUsuario(id, usuario);
		if (updatedUsuario != null) {
			return new ResponseEntity<>(updatedUsuario, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	// Endpoint to delete a usuario
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteUsuario(@PathVariable Long id) {
		usuarioService.deleteUsuario(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
