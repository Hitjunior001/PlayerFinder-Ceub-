package com.ceub.projetointegradoriii.playerfinder.service;

import com.ceub.projetointegradoriii.playerfinder.entity.User;
import com.ceub.projetointegradoriii.playerfinder.entity.UserGameProfile;
import com.ceub.projetointegradoriii.playerfinder.repository.UserGameProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserGameProfileService {

    @Autowired
    private UserGameProfileRepository userGameProfileRepository;

    public Optional<UserGameProfile> findById(Long id ){
        return userGameProfileRepository.findById(id);
    }
    public List<UserGameProfile> getAllProfilePerGameByUser(Long userId){
        return userGameProfileRepository.findByUserId(userId);
    }

    public void deleteProfilePerGame(Long userId, Long jogoId){
        userGameProfileRepository.deleteByUserIdAndJogoId(userId, jogoId);
    }

    public void deleteAllProfileByUserId(Long userId){
        userGameProfileRepository.deleteAllByUserId(userId);
    }


    public void save(UserGameProfile userGameProfile) {
        userGameProfileRepository.save(userGameProfile);
    }

    public List<UserGameProfile> getAllProfilePerGame(Long jogoId){
        return userGameProfileRepository.findByJogoId(jogoId);
    }

}