package com.ceub.projetointegradoriii.playerfinder.repository;

import com.ceub.projetointegradoriii.playerfinder.entity.Attribute;
import com.ceub.projetointegradoriii.playerfinder.entity.Jogo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AttributeRepository extends JpaRepository<Attribute, Long> {

    List<Attribute> findByJogoId(Long jogoId);


}
