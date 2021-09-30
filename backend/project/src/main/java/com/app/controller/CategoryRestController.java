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
import com.app.pojos.Category;
import com.app.service.ICategoryService;

@RestController
@RequestMapping("/categories")
@CrossOrigin
public class CategoryRestController {
	@Autowired
	private ICategoryService  categoryService;
	
	public CategoryRestController() {
		System.out.println("in constr  "+ getClass().getName());
	}
	
	@GetMapping
	public List<Category> fetchAllCategories(){
		System.out.println("in fetch all Categories" );
		return categoryService.getAllCategories();
	}
	
	//add new  Category 
	@PostMapping
	public ResponseEntity<?> addNewCategory(@RequestBody Category category) {
		System.out.println("in add category "+category );
		try {
			return new ResponseEntity<>(categoryService.addCategory(category), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			System.out.println("err in add " + e);
			return new ResponseEntity<>(new ErrorResponse("Adding category failed!!!!!", e.getMessage()),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}	
	
	//update  Category 
	@PutMapping
	public Category updateCategoryDetails(@RequestBody Category category) {
		System.out.println("in update category "+category );
		return categoryService.updateCategory(category);
	}
	
	//delete  user 
	@DeleteMapping("/{categoryId}") // URI template var
	public ResponseEntity<ResponseDTO> deleteUserDetails(@PathVariable Integer categoryId) {
		System.out.println("in delete user details " + categoryId);
		// invoke service layer method for deleting user details
		// return new ResponseEntity<>(new ResponseDTO(userService.deleteUser(userId)),
		// HttpStatus.OK);
		return ResponseEntity.ok(new ResponseDTO(categoryService.deleteCategory(categoryId)));
	}
}
