package com.ceub.projetointegradoriii.playerfinder.service;

import java.util.List;

import com.ceub.projetointegradoriii.playerfinder.entity.Usuario;

public interface UsuarioService {

	public Usuario createUsuario(Usuario usuario);

	public List<Usuario> getAllUsuarios();

	public Usuario getUsuarioById(Long id);

	public Usuario updateUsuario(Long id, Usuario usuario);

	public void deleteUsuario(Long id);

}
