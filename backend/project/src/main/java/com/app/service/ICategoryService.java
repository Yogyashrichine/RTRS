package com.app.service;

import java.util.List;

import com.app.pojos.Category;

public interface ICategoryService {
	List<Category> getAllCategories();
	Category addCategory(Category category);
	Category updateCategory(Category category);
	String deleteCategory(Integer categoryId);
}
