package com.ceub.projetointegradoriii.playerfinder.service;

import com.ceub.projetointegradoriii.playerfinder.entity.Attribute;
import com.ceub.projetointegradoriii.playerfinder.entity.Jogo;
import com.ceub.projetointegradoriii.playerfinder.repository.AttributeRepository;
import com.ceub.projetointegradoriii.playerfinder.repository.JogoRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AttributeService {

	@Autowired
	private AttributeRepository attributeRepository;

	@Autowired
	private JogoRepository jogoRepository;

	public Attribute save(Attribute attribute) {
		Optional<Jogo> optionalJogo = jogoRepository.findById(attribute.getJogo().getId());
		System.out.print(attribute.getJogo().getId());
		Jogo jogo = optionalJogo.orElseThrow(() -> new RuntimeException("Jogo not found with id "));
		attribute.setJogo(jogo);
		return attributeRepository.save(attribute);
	}

	public List<Attribute> getAttributesByJogoId(Long jogoId) {
		return attributeRepository.findByJogoId(jogoId);
	}
	public List<Attribute> getAttributesByIds(List<Long> ids) {
		return attributeRepository.findAllById(ids);
	}
}
