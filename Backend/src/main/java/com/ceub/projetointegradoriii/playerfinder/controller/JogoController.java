package com.ceub.projetointegradoriii.playerfinder.controller;

import java.util.List;
import java.util.Optional;

import com.ceub.projetointegradoriii.playerfinder.service.JogoService;
import com.ceub.projetointegradoriii.playerfinder.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ceub.projetointegradoriii.playerfinder.entity.Jogo;

@RestController
@RequestMapping("/api/jogos")
public class JogoController {

	@Autowired
	private JogoService jogoService;
	@Autowired
	private UserService userService;

	@GetMapping("/list")
	public ResponseEntity<List<Jogo>> getAllJogos() {
		List<Jogo> jogos = jogoService.getAllJogos();
		return new ResponseEntity<>(jogos, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Jogo> getJogoById(@PathVariable("id") Long id) {
		Optional<Jogo> jogoOptional = jogoService.getJogoById(id);
		return jogoOptional.map(jogo -> new ResponseEntity<>(jogo, HttpStatus.OK))
				.orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

	@PostMapping
	public ResponseEntity<Jogo> createJogo(@RequestBody Jogo jogo) {
		Jogo savedJogo = jogoService.save(jogo);
		return new ResponseEntity<>(savedJogo, HttpStatus.CREATED);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Jogo> updateJogo(@PathVariable("id") Long id, @RequestBody Jogo jogo) {
		Optional<Jogo> jogoOptional = jogoService.getJogoById(id);
		if (!jogoOptional.isPresent()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		jogo.setId(id);
		Jogo updatedJogo = jogoService.save(jogo);
		return new ResponseEntity<>(updatedJogo, HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteJogo(@PathVariable("id") Long id) {
		Optional<Jogo> jogoOptional = jogoService.getJogoById(id);
		if (!jogoOptional.isPresent()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		jogoService.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
