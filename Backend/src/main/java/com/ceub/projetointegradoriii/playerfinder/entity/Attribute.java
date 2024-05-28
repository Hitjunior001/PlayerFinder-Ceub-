package com.ceub.projetointegradoriii.playerfinder.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "attribute_jogo")
public class Attribute {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "titulo", nullable = false)
	private String titulo;

	@Column(name = "value", nullable = false)
	private String value;

	@OneToMany(mappedBy = "attribute")
	private List<UserGameProfile> userGameProfiles;

	@ManyToOne
	@JsonBackReference
	private Jogo jogo;
}
