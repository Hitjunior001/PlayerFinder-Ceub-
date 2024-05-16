package com.ceub.projetointegradoriii.playerfinder.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ceub.projetointegradoriii.playerfinder.entity.User;
@Repository
public interface UserRepository extends JpaRepository<User,Long> {
	User findUserByEmail(String email);
	User findByUsername(String username);

	@Query("SELECT id FROM User u WHERE u.username = :username")
	Long getIdByUsername(String username);

	@Modifying
	@Query("UPDATE User u SET " +
			"u.username = COALESCE(:newUsername, u.username), " +
			"u.nomeCompleto = COALESCE(:nomeCompleto, u.nomeCompleto), " +
			"u.email = COALESCE(:email, u.email), " +
			"u.telefone = COALESCE(:telefone, u.telefone), " +
			"u.dataNascimento = COALESCE(:dataNascimento, u.dataNascimento), " +
			"u.nacionalidade = COALESCE(:nacionalidade, u.nacionalidade), " +
			"u.estado = COALESCE(:estado, u.estado), " +
			"u.discord = COALESCE(:discord, u.discord), " +
			"u.instagram = COALESCE(:instagram, u.instagram), " +
			"u.imagemPerfil = COALESCE(:imagemPerfil, u.imagemPerfil) "+
			"WHERE u.username = :oldUsername")
	int updateUserByUsername(@Param("oldUsername") String oldUsername,
							 @Param("newUsername") String newUsername,
							 @Param("nomeCompleto") String nomeCompleto,
							 @Param("email") String email,
							 @Param("telefone") String telefone,
							 @Param("dataNascimento") String dataNascimento,
							 @Param("nacionalidade") String nacionalidade,
							 @Param("estado") String estado,
							 @Param("discord") String discord,
							 @Param("instagram") String instagram,
							 @Param("imagemPerfil") String imagemPerfil);

	@Modifying
	@Query("DELETE FROM User u WHERE u.username = :username")
	void deleteByUsername(@Param("username") String username);
}