package com.app.service;

import java.util.List;

import com.app.pojos.User;

public interface IUserService {
	List<User> getAllUsers();
	User addUser(User user);
	User updateUser(User user);
	String deleteUser(Integer userId);
	User findById(int userId);
	User  getUser(String email,String passsword);
	
}
