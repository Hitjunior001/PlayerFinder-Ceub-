package com.ceub.projetointegradoriii.playerfinder.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "jogos")
public class Jogo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "titulo", nullable = false)
	private String titulo;

	@Column(name = "data_lancamento", nullable = false)
	private Date dataLancamento;

	public Jogo(Long id, String titulo, Date dataLancamento) {
		super();
		this.id = id;
		this.titulo = titulo;
		this.dataLancamento = dataLancamento;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public Date getDataLancamento() {
		return dataLancamento;
	}

	public void setDataLancamento(Date dataLancamento) {
		this.dataLancamento = dataLancamento;
	}

	@Override
	public String toString() {
		return "Jogo [id=" + id + ", titulo=" + titulo + ", dataLancamento=" + dataLancamento + "]";
	}
	
}
