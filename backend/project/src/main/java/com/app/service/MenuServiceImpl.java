package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.MenuRepository;
import com.app.pojos.Menu;

@Service
@Transactional
public class MenuServiceImpl   implements IMenuService {
	@Autowired
	private MenuRepository menuRepo;
	
	@Override
	public List<Menu> getAllMenus() {
		return 	menuRepo.findAll();
	}
	
	@Override
	public Menu addMenu(Menu menu) {
		return menuRepo.save(menu);
	}
	
	@Override
	public Menu updateMenu(Menu menu) {
		return menuRepo.save(menu);
	}
	

	@Override
	public List<Menu> findById(int cateId) {
		// TODO Auto-generated method stub
		return menuRepo.findMenus(cateId);	
	}
	
	
	
	@Override
	public String deleteMenu(Integer menuId) {
		Menu entity = menuRepo.getById(menuId);
		menuRepo.delete(entity);		
		return "Menu details deleted for ID=" + menuId;
	}

}
