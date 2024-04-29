package com.ceub.projetointegradoriii.playerfinder.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
        @GetMapping("/")
        public String home() {
            return "Bem-vindo ao Player Finder! Sua aplicação está funcionando corretamente.";
        }
    }
