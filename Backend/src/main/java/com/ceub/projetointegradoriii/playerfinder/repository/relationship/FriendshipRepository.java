package com.ceub.projetointegradoriii.playerfinder.repository.relationship;

import com.ceub.projetointegradoriii.playerfinder.entity.relationship.Friendship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface FriendshipRepository extends JpaRepository<Friendship, Long> {

    @Query("SELECT COUNT(fr) > 0 FROM Friendship fr WHERE (fr.user.id = :userId AND fr.friend.id = :friendId) OR (fr.user.id = :friendId AND fr.friend.id = :userId)")
    boolean findFriendships(Long userId, Long friendId);

    List<Friendship> findByUserIdOrFriendId(Long userId, Long friendId);

    @Transactional
    void deleteByUserIdAndFriendIdOrUserIdAndFriendId(Long userId1, Long friendId1, Long userId2, Long friendId2);

    boolean existsByUserIdAndFriendIdOrUserIdAndFriendId(Long userId1, Long friendId1, Long userId2, Long friendId2);

    @Modifying
    @Transactional
    @Query("DELETE FROM FriendRequest fr WHERE fr.user.id = :userId OR fr.friend.id = :userId")
    void deleteAllByUserId(@Param("userId") Long userId);
}