package com.ceub.projetointegradoriii.playerfinder;

import com.ceub.projetointegradoriii.playerfinder.controller.AuthController;
import com.ceub.projetointegradoriii.playerfinder.entity.Jogo;
import com.ceub.projetointegradoriii.playerfinder.entity.User;
import com.ceub.projetointegradoriii.playerfinder.security.TokenJWT;
import com.ceub.projetointegradoriii.playerfinder.service.UserService;
import com.ceub.projetointegradoriii.playerfinder.service.relationship.FriendRequestService;
import com.ceub.projetointegradoriii.playerfinder.service.relationship.FriendshipService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class PlayerFinderApplicationTests {

}
