package com.app.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.app.dao.CategoryRepository;
import com.app.pojos.Category;

@Service
@Transactional
public class CategoryServiceImpl   implements ICategoryService{
	//dependancy
		@Autowired
		private CategoryRepository categoryRepo;
		
		@Override
		public List<Category> getAllCategories() {
			return 	categoryRepo.findAll();
		}
		
		@Override
		public Category addCategory(Category category) {
			return  categoryRepo.save(category);
		}
		
		@Override
		public Category updateCategory(Category category) {
			return categoryRepo.save(category);
		}
		
		@Override
		public String deleteCategory(Integer categoryId) {
			Category entity = categoryRepo.getById(categoryId);
			categoryRepo.delete(entity);		
			return "Category details deleted for ID=" + categoryId;
		}
}
