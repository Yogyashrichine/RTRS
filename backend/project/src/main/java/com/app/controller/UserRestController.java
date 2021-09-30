package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ErrorResponse;
import com.app.dto.ResponseDTO;
import com.app.pojos.User;
import com.app.pojos.UserRole;
import com.app.service.IUserService;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserRestController {
	@Autowired
	private IUserService userService;

	
	public UserRestController() {
		System.out.println("in constr  "+ getClass().getName());
	}
	
	@GetMapping
	public List<User> fetchAllUsers(){
		System.out.println("in fetch all customers" );
		return userService.getAllUsers();
	}
	
	//add new  user 
	@PostMapping
	public ResponseEntity<?> addNewUserDetails(@RequestBody User transientUser) {
		System.out.println("in add user "+transientUser );
		try {
			return new ResponseEntity<>(userService.addUser(transientUser), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			System.out.println("err in add " + e);
			return new ResponseEntity<>(new ErrorResponse("Adding User failed!!!!!", e.getMessage()),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}	
	
	//update  user 
	@PutMapping
	public User updateUserDetails(@RequestBody User transientUser) {
		System.out.println("in update user "+transientUser );
		return userService.updateUser(transientUser);
	}
	
	//delete  user 
	@DeleteMapping("/{userId}") // URI template var
	public ResponseEntity<ResponseDTO> deleteUserDetails(@PathVariable Integer userId) {
		System.out.println("in delete user details " + userId);
		// invoke service layer method for deleting user details
		// return new ResponseEntity<>(new ResponseDTO(userService.deleteUser(userId)),
		// HttpStatus.OK);
		return ResponseEntity.ok(new ResponseDTO(userService.deleteUser(userId)));
	}
	
	@PostMapping("/login")
	public User processLoginForm(@RequestBody User user)
	{
		System.out.println("in process login form " + user.getEmail()+" "+user.getPassword());
		
			User detachedUser = userService.getUser(user.getEmail(), user.getPassword());
			System.out.println(detachedUser);
//			//User user = userRepository.findByEmail(email);				
//			if ((detachedUser.getRole() == null)  ||  detachedUser.getRole().equals(UserRole.CUSTOMER) )
//				return "customer";			
//			return "admin";	
			return detachedUser;
		
	}
}
