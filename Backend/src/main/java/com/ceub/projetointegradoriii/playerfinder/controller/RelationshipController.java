package com.ceub.projetointegradoriii.playerfinder.controller;

import com.ceub.projetointegradoriii.playerfinder.entity.User;
import com.ceub.projetointegradoriii.playerfinder.entity.relationship.FriendRequest;
import com.ceub.projetointegradoriii.playerfinder.entity.relationship.Friendship;
import com.ceub.projetointegradoriii.playerfinder.service.TokenService;
import com.ceub.projetointegradoriii.playerfinder.service.UserService;
import com.ceub.projetointegradoriii.playerfinder.service.relationship.FriendRequestService;
import com.ceub.projetointegradoriii.playerfinder.service.relationship.FriendshipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/relationships")
public class RelationshipController {

    @Autowired
    private FriendRequestService friendRequestService;

    @Autowired
    private FriendshipService friendshipService;

    @Autowired
    private UserService userService;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/sendRequest")
    public ResponseEntity<String> sendFriendshipRequest(@RequestHeader("Authorization") String authorizationHeader, @RequestParam Long friendId) {
        Long userId = tokenService.extractIdByToken(authorizationHeader);
        User user = userService.findById(userId).orElseThrow(() -> new IllegalArgumentException("Usuário não encontrado"));
        User friend = userService.findById(friendId).orElseThrow(() -> new IllegalArgumentException("Amigo não encontrado"));
        if(friendshipService.checkFriends(userId, friendId)){
            throw new IllegalStateException("Amigo já adicionado");
        }
        if(friendRequestService.sendFriendshipRequest(user, friend)){
            return ResponseEntity.ok().body("Pedido de amizade enviado com sucesso.");
        }
        throw new IllegalStateException("Falha ao enviar pedido de solicitação");

    }

    @PostMapping("/acceptRequest")
    public ResponseEntity<String> acceptFriendshipRequest(@RequestParam Long requestId) {
         boolean request = friendRequestService.acceptFriendshipRequest(requestId);
         if(request){
             return ResponseEntity.ok().build();
         }
        throw new IllegalStateException("Erro ao aceitar.");
    }
    @PostMapping("/rejectRequest")
    public ResponseEntity<String> rejectFriendshipRequest(@RequestParam Long requestId) {
        FriendRequest friendRequest = friendRequestService.getRequestById(requestId);
        boolean request = friendRequestService.deleteRequest(friendRequest);
        if(request){
            return ResponseEntity.ok().build();
        }
        throw new IllegalStateException("Erro ao recusar.");
    }

    @GetMapping("/list/requests")
    public ResponseEntity<List<FriendRequest>> existsRequestsByUserId(@RequestHeader("Authorization") String authorizationHeader){
        Long userId = tokenService.extractIdByToken(authorizationHeader);
        List<FriendRequest> requests = friendRequestService.existsRequestsByUserId(userId);
        return ResponseEntity.ok().body(requests);
    }

    @GetMapping("/list/friends")
    public ResponseEntity<List<Friendship>> listFriends(@RequestHeader("Authorization") String authorizationHeader) {
        Long userId = tokenService.extractIdByToken(authorizationHeader);
        List<Friendship> friends = friendshipService.listFriends(userId);
        return ResponseEntity.ok().body(friends);
    }
    @DeleteMapping("/list/friends/delete")
    public ResponseEntity<String> deleteFriendship(@RequestHeader("Authorization") String authorizationHeader, @RequestParam Long friendId) {
        Long userId = tokenService.extractIdByToken(authorizationHeader);
        friendshipService.deleteFriendship(userId, friendId);
        return ResponseEntity.ok().body("Amizade deletada com sucesso!");
    }
}
