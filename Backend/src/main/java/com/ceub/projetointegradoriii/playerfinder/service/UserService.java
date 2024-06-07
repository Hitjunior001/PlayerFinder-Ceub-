package com.ceub.projetointegradoriii.playerfinder.service;


import com.ceub.projetointegradoriii.playerfinder.entity.User;
import com.ceub.projetointegradoriii.playerfinder.exceptions.EmailAlreadyInUse;
import com.ceub.projetointegradoriii.playerfinder.exceptions.InvalidEmailFormatException;
import com.ceub.projetointegradoriii.playerfinder.exceptions.UsernameAlreadyInUse;
import com.ceub.projetointegradoriii.playerfinder.exceptions.WeakPasswordException;
import com.ceub.projetointegradoriii.playerfinder.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ReflectionUtils;

import java.beans.PropertyDescriptor;
import java.lang.reflect.Field;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public User createUser(User user) throws InvalidEmailFormatException, WeakPasswordException, UsernameAlreadyInUse, EmailAlreadyInUse {
        if(isValidUsername(user.getUsername())){
            throw new UsernameAlreadyInUse("Nome de usuário digitado já está em uso!");
        }
        if(isValidUniqueEmail(user.getEmail())){
            throw new EmailAlreadyInUse("O email digitado já está em uso!");
        }
        if(!isValidEmail(user.getEmail())){
            throw new InvalidEmailFormatException("Formato de email inválido: "+user.getEmail());
        };
        if(isValidPassword(user.getPassword())){
            throw new WeakPasswordException("A senha digitada é muito fraca!");
        }
            String hashedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);
        user.setRole("USER");
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

    public User updateUser(String username, Map<String, Object> updates) {
        User user = userRepository.findByUsername(username);

        if (user == null) {
            throw new IllegalArgumentException("Usuário não encontrado com o username: " + username);
        }

        ObjectMapper objectMapper = new ObjectMapper();
        User partialUser = objectMapper.convertValue(updates, User.class);

        BeanUtils.copyProperties(partialUser, user, getNullPropertyNames(partialUser));

        return userRepository.save(user);
    }

    private String[] getNullPropertyNames(Object source) {
        final BeanWrapper src = new BeanWrapperImpl(source);
        PropertyDescriptor[] pds = src.getPropertyDescriptors();

        Set<String> emptyNames = new HashSet<>();
        for (PropertyDescriptor pd : pds) {
            Object srcValue = src.getPropertyValue(pd.getName());
            if (srcValue == null) emptyNames.add(pd.getName());
        }
        String[] result = new String[emptyNames.size()];
        return emptyNames.toArray(result);
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
    public boolean isValidPassword(String password){
        return password.length() <= 8;
    }
    public boolean isValidUsername(String username){
        return findByUsername(username) != null;
    }
    public boolean isValidUniqueEmail(String email){
        return findByUsernameOrEmail(email) != null;
    }
}