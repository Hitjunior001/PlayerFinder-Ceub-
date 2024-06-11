package com.ceub.projetointegradoriii.playerfinder.security;

import com.ceub.projetointegradoriii.playerfinder.service.TokenService;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletResponse;
import org.antlr.v4.runtime.Token;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import jakarta.servlet.http.HttpServletRequest;

import java.io.IOException;
import java.security.Key;
import java.util.ArrayList;
import java.util.List;

@Component
public class SecurityFilter extends OncePerRequestFilter {

    @Autowired
    private TokenService tokenService;
    private List<String> ignorePatterns = new ArrayList<>();

    public SecurityFilter() {
        ignorePatterns.add("/auth/login");
        ignorePatterns.add("/h2-console/**");
        ignorePatterns.add("/h2-console");
        ignorePatterns.add("/auth/register");
        ignorePatterns.add("/api-docs");
        ignorePatterns.add("/swagger-ui/index.html");
        ignorePatterns.add("/v3/api-docs/**");
        ignorePatterns.add("/swagger-ui/**");
        ignorePatterns.add("/swagger-resources/**");
        ignorePatterns.add("/api/reset-password");

        ignorePatterns.add("/webjars/**");
        ignorePatterns.add("/swagger-ui/swagger-ui.css");
        ignorePatterns.add("/swagger-ui/index.css");
        ignorePatterns.add("/swagger-ui/swagger-ui-bundle.js");
        ignorePatterns.add("/swagger-ui/swagger-ui-standalone-present.js");
        ignorePatterns.add("/swagger-ui/");
        ignorePatterns.add("/swagger-ui/swagger-initializer.js");

    }
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {

        if (shouldIgnoreRequest(request)) {
            response.setHeader("X-Frame-Options", "SAMEORIGIN");
            chain.doFilter(request, response);
            return;
        }
            try {
            String token = tokenService.extractTokenFromHeader(request.getHeader("Authorization"));
            if (token == null) {
                response.setStatus(HttpStatus.UNAUTHORIZED.value());
                response.getWriter().write("Token nulo");
            }
                else{
                    if(tokenService.validateToken(token)){
                        chain.doFilter(request, response);
                    } else {
                        response.setStatus(HttpStatus.UNAUTHORIZED.value());
                        response.getWriter().write("Token inválido");
                    }
                }
        } catch (ExpiredJwtException e) {
            response.setStatus(HttpStatus.UNAUTHORIZED.value());
            response.getWriter().write("Token expirado");
        } catch (IllegalArgumentException e) {
            response.setStatus(HttpStatus.UNAUTHORIZED.value());
            response.getWriter().write("Token inválido");
        }
    }
    private boolean shouldIgnoreRequest(HttpServletRequest request) {
        String requestUri = request.getRequestURI();
        for (String pattern : ignorePatterns) {
            if (requestUri.startsWith(request.getContextPath() + pattern)) {
                return true;
            }
        }
        return false;
    }
}