package com.ceub.projetointegradoriii.playerfinder.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "password", nullable = false, columnDefinition = "VARCHAR(60)")
	private String password;

	@Column(name = "nome_completo", nullable = false)
	private String nomeCompleto;

	@Column(name = "username", nullable = false, unique = true)
	private String username;

	@Column(name = "email", nullable = false)
	private String email;

	@Column(name = "telefone")
	private String telefone;

	@Column(name = "data_nascimento", nullable = false)
	private String dataNascimento;

	@Column(name = "nacionalidade", nullable = false)
	private String nacionalidade;

	@Column(name = "estado", nullable = false)
	private String estado;

	@Column(name = "discord")
	private String discord;

	@Column(name = "instagram")
	private String instagram;

	@Column(name = "imagem_perfil", nullable = false)
	private String imagemPerfil;

	@Column(name = "role")
	private String role;

}
