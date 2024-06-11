package com.ceub.projetointegradoriii.playerfinder.controller;

import com.ceub.projetointegradoriii.playerfinder.entity.Jogo;
import com.ceub.projetointegradoriii.playerfinder.entity.User;
import com.ceub.projetointegradoriii.playerfinder.entity.UserGameProfile;
import com.ceub.projetointegradoriii.playerfinder.service.JogoService;
import com.ceub.projetointegradoriii.playerfinder.service.TokenService;
import com.ceub.projetointegradoriii.playerfinder.service.UserGameProfileService;
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

    @Autowired
    private UserGameProfileService userGameProfileService;

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
    public ResponseEntity<List<UserGameProfile>> getAllUsuariosByJogo(@RequestParam Long jogoId) {
        Optional<Jogo> jogoOptional = jogoService.getJogoById(jogoId);
        Jogo jogo = jogoOptional.get();
        List<UserGameProfile> users = userGameProfileService.getAllProfilePerGame(jogo.getId());
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @ApiResponse(responseCode = "200", description = "Perfil de jogos listados com sucesso")
    @GetMapping("/perfil/jogos/perfil-jogos")
    public ResponseEntity<List<UserGameProfile>> listarPerfilPerJogo(@RequestHeader("Authorization") String authorizationHeader) {
        String token = tokenService.extractTokenFromHeader(authorizationHeader);
        String username = tokenService.extractUsername(token);
        User existingUser = userService.findByUsername(username);
        List<UserGameProfile> perfilGame = userGameProfileService.getAllProfilePerGameByUser(existingUser.getId());
        return new ResponseEntity<>(perfilGame, HttpStatus.OK);
    }

}
