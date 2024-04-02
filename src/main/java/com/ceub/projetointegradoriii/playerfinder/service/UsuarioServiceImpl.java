package com.ceub.projetointegradoriii.playerfinder.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ceub.projetointegradoriii.playerfinder.entity.Usuario;
import com.ceub.projetointegradoriii.playerfinder.repository.UsuarioRepository;

@Service
public class UsuarioServiceImpl implements UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Override
	public Usuario createUsuario(Usuario usuario) {
		return usuarioRepository.save(usuario);
	}

	@Override
	public List<Usuario> getAllUsuarios() {
		return usuarioRepository.findAll();
	}

	@Override
	public Usuario getUsuarioById(Long id) {
		Optional<Usuario> usuarioOptional = usuarioRepository.findById(id);
		return usuarioOptional.orElse(null);
	}

	@Override
	public Usuario updateUsuario(Long id, Usuario usuario) {
		Optional<Usuario> usuarioOptional = usuarioRepository.findById(id);
		if (usuarioOptional.isPresent()) {
			Usuario existingUsuario = usuarioOptional.get();
			existingUsuario.setNomeCompleto(usuario.getNomeCompleto());
			existingUsuario.setUsername(usuario.getUsername());
			existingUsuario.setEmail(usuario.getEmail());
			existingUsuario.setTelefone(usuario.getTelefone());
			existingUsuario.setDataNascimento(usuario.getDataNascimento());
			existingUsuario.setNacionalidade(usuario.getNacionalidade());
			existingUsuario.setEstado(usuario.getEstado());
			existingUsuario.setDiscord(usuario.getDiscord());
			existingUsuario.setInstagram(usuario.getInstagram());
			existingUsuario.setImagemPerfil(usuario.getImagemPerfil());
			return usuarioRepository.save(existingUsuario);
		} else {
			return null;
		}
	}

	@Override
	public void deleteUsuario(Long id) {
		usuarioRepository.deleteById(id);
	}
}
