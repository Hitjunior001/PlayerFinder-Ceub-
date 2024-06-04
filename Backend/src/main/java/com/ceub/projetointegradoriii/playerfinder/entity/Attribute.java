package com.ceub.projetointegradoriii.playerfinder.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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

	@ManyToOne
	@JoinColumn(name = "jogo_id", nullable = false)
	@JsonBackReference("jogo-attribute")
	private Jogo jogo;
}
