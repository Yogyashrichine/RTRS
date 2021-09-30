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
import com.app.pojos.Menu;
import com.app.service.IMenuService;

@RestController
@RequestMapping("/menus")
@CrossOrigin
public class MenuRestController {
	@Autowired
	private IMenuService menuService;

	
	public MenuRestController() {
		System.out.println("in constr  "+ getClass().getName());
	}
	
	@GetMapping
	public List<Menu> fetchAllMenus(){
		System.out.println("in fetch all Menu" );
		return menuService.getAllMenus();
	}
	
	//add new  user 
	@PostMapping
	public ResponseEntity<?> addNewMenuDetails(@RequestBody Menu menu) {
		System.out.println("in add menu "+menu );
		try {
			return new ResponseEntity<>(menuService.addMenu(menu), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			System.out.println("err in add " + e);
			return new ResponseEntity<>(new ErrorResponse("Adding menu failed!!!!!", e.getMessage()),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}	
	
	//update  user 
	@PutMapping
	public Menu updateMenuDetails(@RequestBody Menu menu) {
		System.out.println("in update menu "+menu );
		return menuService.updateMenu(menu);
	}
	
	//delete  user 
	@DeleteMapping("/{menuId}") // URI template var
	public ResponseEntity<ResponseDTO> deleteMenuDetails(@PathVariable Integer menuId) {
		System.out.println("in delete menu details " + menuId);
		// invoke service layer method for deleting user details
		// return new ResponseEntity<>(new ResponseDTO(userService.deleteUser(userId)),
		// HttpStatus.OK);
		return ResponseEntity.ok(new ResponseDTO(menuService.deleteMenu(menuId)));
	}
	
	@GetMapping("/{catId}")
		public List<Menu> getMenuByCategoryId(@PathVariable int catId) {	
		System.out.println(catId);
			return menuService.findById(catId);
			//return menuService.findById(4);
		}

}
