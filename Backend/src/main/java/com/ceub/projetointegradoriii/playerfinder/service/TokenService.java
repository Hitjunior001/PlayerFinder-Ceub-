package com.ceub.projetointegradoriii.playerfinder.service;

import com.ceub.projetointegradoriii.playerfinder.security.TokenJWT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.security.SignatureException;

@Service
public class TokenService {

    @Autowired
    private TokenJWT tokenJWT;

    public String generateToken(String username) {
        return tokenJWT.generateToken(username);
    }

    public boolean isTokenValid(String token) {
        return tokenJWT.isTokenValid(token);
    }

    public String getSubjectFromToken(String token) throws SignatureException {
        return tokenJWT.getSubjectFromToken(token);
    }

    public String extractUsername(String token) {
        return tokenJWT.extractUsername(token);
    }

    public boolean validateToken(String token) {
        return tokenJWT.validateToken(token);
    }
    public String extractTokenFromHeader(String authorizationHeader){
        return tokenJWT.extractTokenFromHeader(authorizationHeader);
    }

    }