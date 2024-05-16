package com.ceub.projetointegradoriii.playerfinder.repository.relationship;

import com.ceub.projetointegradoriii.playerfinder.entity.relationship.FriendRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FriendRequestRepository extends JpaRepository<FriendRequest, Long> {
    @Query("SELECT COUNT(fr) > 0 FROM FriendRequest fr WHERE (fr.user.id = :userId AND fr.friend.id = :friendId) OR (fr.user.id = :friendId AND fr.friend.id = :userId)")
    boolean existsByUserIdAndFriendId(Long userId, Long friendId);

    @Query("SELECT fr FROM FriendRequest fr WHERE (fr.friend.id = :userId)")
    List<FriendRequest> existsRequestsByUserId(Long userId);

    List<FriendRequest> findAll();
}
