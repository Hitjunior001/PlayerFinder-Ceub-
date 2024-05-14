package com.ceub.projetointegradoriii.playerfinder.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ceub.projetointegradoriii.playerfinder.entity.User;
@Repository
public interface UserRepository extends JpaRepository<User,Long> {
	User findUserByEmail(String email);
	User findByUsername(String username);
}