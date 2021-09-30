package com.app.service;

import java.util.List;
import com.app.pojos.Menu;

public interface IMenuService {
	List<Menu> getAllMenus();
	Menu addMenu(Menu menu);
	Menu updateMenu(Menu menu);
	String deleteMenu(Integer menuId);	
    List<Menu> findById(int cateId);

}
