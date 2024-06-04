package com.ceub.projetointegradoriii.playerfinder.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

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

	@Column(name = "email", nullable = false, unique = true)
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

	@ManyToMany
	@JoinTable(
			name = "user_game",
			joinColumns = @JoinColumn(name = "user_id"),
			inverseJoinColumns = @JoinColumn(name="jogo_id")
	)
	@JsonManagedReference("user-jogo")
	private List<Jogo> jogos;

	@OneToMany(mappedBy = "user")
	@JsonManagedReference("user-userGameProfile")
	private List<UserGameProfile> userGameProfiles;
}
