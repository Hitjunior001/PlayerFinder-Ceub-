package com.ceub.projetointegradoriii.playerfinder.repository;

import com.ceub.projetointegradoriii.playerfinder.entity.Jogo;
import com.ceub.projetointegradoriii.playerfinder.entity.UserGameProfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserGameProfileRepository extends JpaRepository<UserGameProfile, Long> {

}
