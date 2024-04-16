package com.ceub.projetointegradoriii.playerfinder.service;

import java.util.List;
import java.util.Optional;

import com.ceub.projetointegradoriii.playerfinder.entity.Jogo;

public interface JogoService {

	List<Jogo> getAllJogos();

	Optional<Jogo> getJogoById(Long id);

	Jogo createJogo(Jogo jogo);

	Optional<Jogo> updateJogo(Long id, Jogo jogo);

	void deleteJogo(Long id);
}
