package com.ceub.projetointegradoriii.playerfinder.controller;

import com.ceub.projetointegradoriii.playerfinder.dto.ConsolidatedUserGameProfile;
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
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;


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
    public ResponseEntity<List<ConsolidatedUserGameProfile>> getAllUsuariosByJogo(@RequestParam Long jogoId) {
        Optional<Jogo> jogoOptional = jogoService.getJogoById(jogoId);
        Jogo jogo = jogoOptional.get();
        List<ConsolidatedUserGameProfile> consolidatedProfiles = userGameProfileService.getConsolidatedProfilesByGame(jogoId);
        return new ResponseEntity<>(consolidatedProfiles, HttpStatus.OK);
    }


    @PostMapping("jogo/filter/usuario")
    public ResponseEntity<List<ConsolidatedUserGameProfile>> getFilteredUsuariosByJogo(
            @RequestParam Long jogoId, @RequestBody Map<String, String> filters) {

        List<ConsolidatedUserGameProfile> consolidatedProfiles = userGameProfileService.getConsolidatedProfilesByGame(jogoId);

        List<ConsolidatedUserGameProfile> filteredProfiles = consolidatedProfiles.stream()
                .filter(profile -> matchesFilters(profile, filters))
                .toList();
        return new ResponseEntity<>(filteredProfiles, HttpStatus.OK);
    }

    private boolean matchesFilters(ConsolidatedUserGameProfile profile, Map<String, String> filters) {
        if (filters.containsKey("username") && !filters.get("username").isEmpty()) {
            if (!profile.getUsername().toLowerCase().contains(filters.get("username").toLowerCase())) {
                return false;
            }
        }

        return filters.entrySet().stream()
                .filter(entry -> !"username".equals(entry.getKey()))
                .allMatch(entry -> entry.getValue().isEmpty() ||
                        entry.getValue().equals(profile.getAttributes().get(entry.getKey())));
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
