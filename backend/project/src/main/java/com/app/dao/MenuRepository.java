package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Menu;

public interface MenuRepository extends JpaRepository<Menu,Integer> {
	@Query("select m  from Menu m where m.category.cateId=:cateId")
	List<Menu> findMenus(@Param("cateId") int cateId);
	

}
