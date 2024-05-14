package com.ceub.projetointegradoriii.playerfinder.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class TokenJWT {

    private final Key secretKey;

    public TokenJWT(@Value("${jwt.secret}") String secret) {
        this.secretKey = Keys.hmacShaKeyFor(secret.getBytes());
    }
    private final long EXPIRATION_TIME_MS = 1800000; // 30 minutos

    public String generateToken(String username) {
        Date expirationDate = new Date(System.currentTimeMillis() + EXPIRATION_TIME_MS);
        return Jwts.builder()
                .setSubject(username)
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .compact();
    }
    public boolean isTokenValid(String token) {
        try {
            Jwts.parser().setSigningKey(secretKey).build().parseSignedClaims(token).getPayload();
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    public String getSubjectFromToken(String token) throws SignatureException {
        try {
            Jws<Claims> claims = (Jws<Claims>) Jwts.parser().setSigningKey(secretKey).build().parseSignedClaims(token);
            return claims.getBody().getSubject();
        } catch (SignatureException e) {
            throw new SignatureException("Assinatura do token inválida");
        }
    }
    public boolean validateToken(String token) {
        try {
            Jws<Claims> claims = (Jws<Claims>) Jwts.parser().setSigningKey(secretKey).build().parseSignedClaims(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    public String extractUsername(String token) {
        return   Jwts.parser().setSigningKey(secretKey).build().parseSignedClaims(token)
                .getBody()
                .getSubject();
    }

    public String extractTokenFromHeader(String authorizationHeader) {
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            return authorizationHeader.substring(7);
        }
        return null;
    }
}
