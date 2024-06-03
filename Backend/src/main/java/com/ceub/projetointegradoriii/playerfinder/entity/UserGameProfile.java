package com.ceub.projetointegradoriii.playerfinder.entity;

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
@Table(name = "user_game_profile")
public class UserGameProfile {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	@JsonManagedReference
	private User user;

	@ManyToOne
	@JoinColumn(name = "jogo_id", nullable = false)
	@JsonManagedReference
	private Jogo jogo;

	@ManyToOne
	@JoinColumn(name = "attribute_id", nullable = false)
	@JsonManagedReference
	private Attribute attribute;

	@Column(name = "username", nullable = false)
	private String username;
}
