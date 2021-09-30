package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserRepository;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
	// dependancy
	@Autowired
	private UserRepository userRepo;

	@Override
	public List<User> getAllUsers() {
		return userRepo.findAll();
	}

	@Override
	public User addUser(User user) {
		return userRepo.save(user);
	}

	@Override
	public User updateUser(User user) {
		return userRepo.save(user);
	}

	@Override
	public String deleteUser(Integer userId) {
		User entity = userRepo.getById(userId);
		userRepo.delete(entity);
		return "User details deleted for ID=" + userId;
	}

	@Override
	public User findById(int userId) {
		// TODO Auto-generated method stub
		return userRepo.getById(userId);

	}

	@Override
	public User getUser(String email, String passsword) {
		// TODO Auto-generated method stub
		return userRepo.findByEmailAndPassword(email, passsword)
				.orElseThrow(() -> new RuntimeException("Invalid Login"));
	}

}
