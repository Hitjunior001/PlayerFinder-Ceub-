package com.ceub.projetointegradoriii.playerfinder.service.relationship;

import com.ceub.projetointegradoriii.playerfinder.entity.relationship.Friendship;
import com.ceub.projetointegradoriii.playerfinder.repository.relationship.FriendshipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FriendshipService {

    @Autowired
    private FriendshipRepository friendshipRepository;

    public boolean checkFriends(Long id, Long friend){
        return friendshipRepository.findFriendships(id, friend) ||
                friendshipRepository.findFriendships(friend, id);
    }
    public List<Friendship> listFriends(Long userId) {
        return friendshipRepository.findByUserIdOrFriendId(userId, userId);
    }

    public void deleteAllFriendShipByUserId(Long userId){
        friendshipRepository.deleteAllByUserId(userId);
    }

    public void deleteFriendship(Long userId, Long friendId) {
        if (!friendshipRepository.existsByUserIdAndFriendIdOrUserIdAndFriendId(userId, friendId, friendId, userId)) {
            throw new IllegalStateException("Amizade não encontrada " + userId + " com " + friendId);
        }
        friendshipRepository.deleteByUserIdAndFriendIdOrUserIdAndFriendId(userId, friendId, friendId, userId);
    }
    public Friendship save(Friendship friendship){
        return friendshipRepository.save(friendship);
    }
}
