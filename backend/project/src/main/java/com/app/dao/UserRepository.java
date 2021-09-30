package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	// use : inherited method: List<T> findAll()
	// use : inherited method: <S extends T> S save (S entity)

//	@Query("select u from User u where u.email=:email and u.password=:password")
//	User validateUser(@Param("email") String email,@Param("password") String password);

	Optional<User> findByEmailAndPassword(String email, String password);
	// User findByEmail(String email);

}
