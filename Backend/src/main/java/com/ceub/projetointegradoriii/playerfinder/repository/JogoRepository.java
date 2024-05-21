package com.ceub.projetointegradoriii.playerfinder.repository;

import com.ceub.projetointegradoriii.playerfinder.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import com.ceub.projetointegradoriii.playerfinder.entity.Jogo;

import java.util.List;

public interface JogoRepository extends JpaRepository<Jogo, Long> {

}
