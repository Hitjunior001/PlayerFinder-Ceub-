package com.ceub.projetointegradoriii.playerfinder.entity;

import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "jogos")
public class Jogo{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "titulo", nullable = false)
	private String titulo;

	@Column(name = "description", nullable = false)
	private String description;

	@OneToMany(mappedBy = "jogo", fetch = FetchType.EAGER)
	@JsonManagedReference
	private List<Attribute> attributes;

	@ManyToMany(mappedBy = "jogos")
	@JsonIgnore
	private List<User> users;

	@OneToMany(mappedBy = "jogo")
	@JsonBackReference
	private List<UserGameProfile> userGameProfiles;



}
