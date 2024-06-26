package com.ceub.projetointegradoriii.playerfinder.service.relationship;

import com.ceub.projetointegradoriii.playerfinder.entity.User;
import com.ceub.projetointegradoriii.playerfinder.entity.relationship.FriendRequest;

import com.ceub.projetointegradoriii.playerfinder.entity.relationship.Friendship;
import com.ceub.projetointegradoriii.playerfinder.repository.relationship.FriendRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class FriendRequestService {

    @Autowired
    private FriendRequestRepository friendRequestRepository;

    @Autowired
    private FriendshipService friendshipService;

    public boolean sendFriendshipRequest(User user, User friend) {
        Long userId = user.getId();
        Long friendId = friend.getId();
        if (hasPendingFriendRequest(userId, friendId) ) {
            throw new IllegalStateException("Já existe um pedido de amizade pendente entre os usuários.");
        }
        FriendRequest newFriendRequest = new FriendRequest();

        newFriendRequest.setUser(user);
        newFriendRequest.setFriend(friend);
        friendRequestRepository.save(newFriendRequest);
        return true;
    }

    public boolean acceptFriendshipRequest(Long id){
        FriendRequest request = friendRequestRepository.findById(id).orElse(null);
        if(request != null){
                request.setAccepted(true);
                friendRequestRepository.save(request);
                Friendship friendship = new Friendship();
                friendship.setUser(request.getUser());
                friendship.setFriend(request.getFriend());
                friendship.setAcceptedDate(LocalDateTime.now());
                friendshipService.save(friendship);
            deleteRequest(request);
            return true;
        }
        else{
            return false;
        }
    }

    public FriendRequest createFriendRequest(FriendRequest friendRequest) {
        return friendRequestRepository.save(friendRequest);
    }

    public boolean hasPendingFriendRequest(Long userId, Long friendId) {
        return friendRequestRepository.existsByUserIdAndFriendId(userId, friendId) ||
                friendRequestRepository.existsByUserIdAndFriendId(friendId, userId);
    }

    public boolean deleteRequest(FriendRequest friendRequest){
        try{
            friendRequestRepository.delete(friendRequest);
            return true;
        }catch(Exception e){
            throw new RuntimeException();
        }
    }

    public List<FriendRequest> existsRequestsByUserId(Long id){
        return friendRequestRepository.existsRequestsByUserId(id);
    }

    public void deleteAllFriendRequestByUserId(Long userId){
        try{
            friendRequestRepository.deleteAllByUserId(userId);

        }catch(Exception e){
            throw new RuntimeException();
        }
    }

    public FriendRequest getRequestById(Long id){
        return friendRequestRepository.findById(id).orElse(null);
    }

}