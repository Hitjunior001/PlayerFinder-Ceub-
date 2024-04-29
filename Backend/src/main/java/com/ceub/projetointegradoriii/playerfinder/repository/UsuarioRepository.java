package com.ceub.projetointegradoriii.playerfinder.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ceub.projetointegradoriii.playerfinder.entity.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	// Find usuario by username
	Usuario findByUsername(String username);

	// Find usuarios by estado
	List<Usuario> findByEstado(String estado);

	// Find usuarios by nacionalidade and estado
	List<Usuario> findByNacionalidadeAndEstado(String nacionalidade, String estado);

	// Find usuarios by email containing a specific string
	List<Usuario> findByEmailContaining(String keyword);

	// Find usuario by username or email
	Usuario findByUsernameOrEmail(String username, String email);

	// Count the number of usuarios by estado
	long countByEstado(String estado);
}
