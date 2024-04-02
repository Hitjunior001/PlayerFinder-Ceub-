package com.ceub.projetointegradoriii.playerfinder.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuarios")
public class Usuario {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "id")
	    private Long id;

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

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getNomeCompleto() {
			return nomeCompleto;
		}

		public void setNomeCompleto(String nomeCompleto) {
			this.nomeCompleto = nomeCompleto;
		}

		public String getUsername() {
			return username;
		}

		public void setUsername(String username) {
			this.username = username;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getTelefone() {
			return telefone;
		}

		public void setTelefone(String telefone) {
			this.telefone = telefone;
		}

		public String getDataNascimento() {
			return dataNascimento;
		}

		public void setDataNascimento(String dataNascimento) {
			this.dataNascimento = dataNascimento;
		}

		public String getNacionalidade() {
			return nacionalidade;
		}

		public void setNacionalidade(String nacionalidade) {
			this.nacionalidade = nacionalidade;
		}

		public String getEstado() {
			return estado;
		}

		public void setEstado(String estado) {
			this.estado = estado;
		}

		public String getDiscord() {
			return discord;
		}

		public void setDiscord(String discord) {
			this.discord = discord;
		}

		public String getInstagram() {
			return instagram;
		}

		public void setInstagram(String instagram) {
			this.instagram = instagram;
		}

		public String getImagemPerfil() {
			return imagemPerfil;
		}

		public void setImagemPerfil(String imagemPerfil) {
			this.imagemPerfil = imagemPerfil;
		}
}
