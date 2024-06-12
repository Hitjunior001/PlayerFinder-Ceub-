package com.ceub.projetointegradoriii.playerfinder.service;

import com.ceub.projetointegradoriii.playerfinder.dto.ConsolidatedUserGameProfile;
import com.ceub.projetointegradoriii.playerfinder.entity.Attribute;
import com.ceub.projetointegradoriii.playerfinder.entity.User;
import com.ceub.projetointegradoriii.playerfinder.entity.UserGameProfile;
import com.ceub.projetointegradoriii.playerfinder.repository.UserGameProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

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


    public List<ConsolidatedUserGameProfile> getConsolidatedProfilesByGame(Long jogoId) {
        List<UserGameProfile> profiles = userGameProfileRepository.findByJogoId(jogoId);

        Map<String, Map<Long, Map<String, String>>> consolidatedMap = new HashMap<>();

        for (UserGameProfile profile : profiles) {
            String username = profile.getUsername();
            Long gameId = profile.getJogo().getId();

            Map<Long, Map<String, String>> userGameMap = consolidatedMap.getOrDefault(username, new HashMap<>());
            Map<String, String> attributes = userGameMap.getOrDefault(gameId, new HashMap<>());

            attributes.put(profile.getAttribute().getTitulo(), profile.getAttribute().getValue());

            userGameMap.put(gameId, attributes);
            consolidatedMap.put(username, userGameMap);
        }

        return consolidatedMap.entrySet().stream()
                .flatMap(entry -> entry.getValue().entrySet().stream()
                        .map(gameEntry -> new ConsolidatedUserGameProfile(
                                entry.getKey(),
                                gameEntry.getKey(),
                                gameEntry.getValue()
                        ))
                )
                .collect(Collectors.toList());
    }

}