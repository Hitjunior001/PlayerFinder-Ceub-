package com.ceub.projetointegradoriii.playerfinder.controller;

import com.ceub.projetointegradoriii.playerfinder.security.TokenJWT;
import io.jsonwebtoken.JwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/token")
public class TokenController {

    private final TokenJWT tokenJWT;

    @Autowired
    public TokenController(TokenJWT tokenJWT) {
        this.tokenJWT = tokenJWT;
    }

    @GetMapping("/generate")
    public ResponseEntity<String> generateToken() {
        String username = "exampleUser";
        String token = tokenJWT.generateToken(username);
        return ResponseEntity.status(HttpStatus.OK).body(token);
    }

    @GetMapping("/validate")
    public ResponseEntity<String> validateToken(HttpServletRequest request) {
        String token = extractTokenFromHeader(request.getHeader("Authorization"));
        boolean isValid = tokenJWT.validateToken(token);
        if (isValid) {
            return ResponseEntity.status(HttpStatus.OK).body("Token válido");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Token inválido");
        }
    }

    @GetMapping("/username")
    public ResponseEntity<String> getUsernameFromToken(HttpServletRequest request) {
        String token = extractTokenFromHeader(request.getHeader("Authorization")); // Extrai o token do cabeçalho Authorization
        if (token == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Token não fornecido");
        }
        try {
            String username = tokenJWT.extractUsername(token);
            return ResponseEntity.status(HttpStatus.OK).body(username);
        } catch (JwtException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Token inválido");
        }
    }

    public String extractTokenFromHeader(String authorizationHeader) {
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            return authorizationHeader.substring(7);
        }
        return null;
    }
}