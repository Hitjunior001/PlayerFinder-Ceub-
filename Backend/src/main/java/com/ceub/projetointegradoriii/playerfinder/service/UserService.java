package com.ceub.projetointegradoriii.playerfinder.service;
import org.springframework.beans.BeanUtils;


import com.ceub.projetointegradoriii.playerfinder.entity.User;
import com.ceub.projetointegradoriii.playerfinder.repository.UserRepository;
import jakarta.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public User createUser(User user) {
        String hashedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public User getUserById(long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Transactional
    public User updateUser(String username, User updatedUserData) {
        int updatedRows = userRepository.updateUserByUsername(username,
                updatedUserData.getUsername(),
                updatedUserData.getNomeCompleto(),
                updatedUserData.getEmail(),
                updatedUserData.getTelefone(),
                updatedUserData.getDataNascimento(),
                updatedUserData.getNacionalidade(),
                updatedUserData.getEstado(),
                updatedUserData.getDiscord(),
                updatedUserData.getInstagram(),
                updatedUserData.getImagemPerfil());
        if (updatedRows > 0) {
            return updatedUserData;
        } else {
            return null;
        }
    }

    @Transactional
    public void deleteUserByUsername(String username) {
        userRepository.deleteByUsername(username);
    }
}