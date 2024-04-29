package com.ceub.projetointegradoriii.playerfinder.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ceub.projetointegradoriii.playerfinder.entity.Jogo;
import com.ceub.projetointegradoriii.playerfinder.repository.JogoRepository;

@Service
public class JogoServiceImpl implements JogoService {

	private final JogoRepository jogoRepository;

	@Autowired
	public JogoServiceImpl(JogoRepository jogoRepository) {
		this.jogoRepository = jogoRepository;
	}

	@Override
	public List<Jogo> getAllJogos() {
		return jogoRepository.findAll();
	}

	@Override
	public Optional<Jogo> getJogoById(Long id) {
		return jogoRepository.findById(id);
	}

	@Override
	public Jogo createJogo(Jogo jogo) {
		return jogoRepository.save(jogo);
	}

	@Override
	public Optional<Jogo> updateJogo(Long id, Jogo jogo) {
		Optional<Jogo> jogoOptional = jogoRepository.findById(id);
		if (jogoOptional.isPresent()) {
			jogo.setId(id);
			return Optional.of(jogoRepository.save(jogo));
		} else {
			return Optional.empty();
		}
	}

	@Override
	public void deleteJogo(Long id) {
		jogoRepository.deleteById(id);
	}
}
