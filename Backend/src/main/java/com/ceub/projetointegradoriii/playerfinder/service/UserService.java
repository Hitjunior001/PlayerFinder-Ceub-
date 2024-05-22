package com.ceub.projetointegradoriii.playerfinder.service;


import com.ceub.projetointegradoriii.playerfinder.entity.User;
import com.ceub.projetointegradoriii.playerfinder.exceptions.InvalidEmailFormatException;
import com.ceub.projetointegradoriii.playerfinder.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public User createUser(User user) throws InvalidEmailFormatException{
        String hashedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);
        user.setRole("USER");
        if(!isValidEmail(user.getEmail())){
            throw new InvalidEmailFormatException("Formato de email inválido.");
        };
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User findByUsernameOrEmail(String usernameOrEmail) {
        return userRepository.findByUsernameOrEmail(usernameOrEmail);
    }

    public User findByUsername(String username){
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
    public Optional<User> findById(Long id ){
        return userRepository.findById(id);
    }

    @Transactional
    public void deleteUserByUsername(String username) {
        userRepository.deleteByUsername(username);
    }

    public User save(User user) {
        return userRepository.save(user);
    }

    public boolean isValidEmail(String email){
        String regex = "^(.+)@(.+)$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(email);
        return matcher.find();
    }
}