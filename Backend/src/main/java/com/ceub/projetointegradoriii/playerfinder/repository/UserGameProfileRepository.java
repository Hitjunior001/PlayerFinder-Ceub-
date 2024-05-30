package com.ceub.projetointegradoriii.playerfinder.repository;

import com.ceub.projetointegradoriii.playerfinder.entity.Jogo;
import com.ceub.projetointegradoriii.playerfinder.entity.User;
import com.ceub.projetointegradoriii.playerfinder.entity.UserGameProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface UserGameProfileRepository extends JpaRepository<UserGameProfile, Long> {

    List<UserGameProfile> findByUserId(long userId);

    @Modifying
    @Transactional
    @Query("DELETE FROM UserGameProfile ugp WHERE ugp.user.id = :userId AND ugp.jogo.id = :jogoId")
    void deleteByUserIdAndJogoId(Long userId, Long jogoId);

}
