package com.ceub.projetointegradoriii.playerfinder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ceub.projetointegradoriii.playerfinder.entity.User;
@Repository
public interface UserRepository extends JpaRepository<User,Long> {

	User findByUsername(String username);

	@Query("SELECT u FROM User u WHERE u.username = :username OR u.email = :username")
	User findByUsernameOrEmail(@Param("username") String username);

	@Query("SELECT id FROM User u WHERE u.username = :username")
	Long getIdByUsername(String username);

	@Modifying
	@Query("DELETE FROM User u WHERE u.username = :username")
	void deleteByUsername(@Param("username") String username);
}