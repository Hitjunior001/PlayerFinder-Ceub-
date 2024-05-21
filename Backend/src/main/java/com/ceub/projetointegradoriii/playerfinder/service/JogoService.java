package com.ceub.projetointegradoriii.playerfinder.service;

import java.util.List;
import java.util.Optional;

import com.ceub.projetointegradoriii.playerfinder.entity.Jogo;
import com.ceub.projetointegradoriii.playerfinder.entity.User;
import com.ceub.projetointegradoriii.playerfinder.repository.JogoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JogoService {

	@Autowired
	private JogoRepository jogoRepository;


	public List<Jogo> getAllJogos() {
		return jogoRepository.findAll();
	}

	public Optional<Jogo> getJogoById(Long id){
		return jogoRepository.findById(id);
	}

	public Jogo createJogo(Jogo jogo){
		return jogoRepository.save(jogo);
	}

	public List<Jogo> findJogosByUsuario(User user) {
		return user.getJogos();
	}
	public List<User> findUsuariosByJogo(Jogo jogo) {
		return jogo.getUsers();
	}

//	Optional<Jogo> updateJogo(Long id, Jogo jogo);
//
//	void deleteJogo(Long id);
}
