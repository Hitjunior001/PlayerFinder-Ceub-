package com.ceub.projetointegradoriii.playerfinder.controller;

import com.ceub.projetointegradoriii.playerfinder.entity.Jogo;
import com.ceub.projetointegradoriii.playerfinder.entity.User;
import com.ceub.projetointegradoriii.playerfinder.service.JogoService;
import com.ceub.projetointegradoriii.playerfinder.service.TokenService;
import com.ceub.projetointegradoriii.playerfinder.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@Tag(name = "Jogos do usuário", description = "Endpoints para listar os jogos do usuário")
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class GameProfileController {

    @Autowired
    private JogoService jogoService;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UserService userService;

    @GetMapping("/perfil/jogos/meus-jogos")
    @Operation(summary = "Lista todos os jogos do usuário")
    @ApiResponse(responseCode = "200", description = "Jogos listados com sucesso")
    public ResponseEntity<List<Jogo>> listarJogosDoUsuario(@RequestHeader("Authorization") String authorizationHeader) {
        String token = tokenService.extractTokenFromHeader(authorizationHeader);
        String username = tokenService.extractUsername(token);
        User existingUser = userService.findByUsername(username);
        List<Jogo> jogos = jogoService.findJogosByUsuario(existingUser);
        return ResponseEntity.ok(jogos);
    }

    @GetMapping("jogo/usuarios")
    public ResponseEntity<List<User>> getAllUsuariosByJogo(@RequestParam Long jogoId) {
        Optional<Jogo> jogoOptional = jogoService.getJogoById(jogoId);
        Jogo jogo = jogoOptional.get();
        List<User> users = jogoService.findUsuariosByJogo(jogo);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }



}
