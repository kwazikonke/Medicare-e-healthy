package com.medicare.service;

import java.util.List;

import com.medicare.main.Category;

public interface Categoryservice {
	
	public Category addCategory(Category category);
	public List<Category> getAllCategory();
	public Category getCategoryByName(String name);
	public  Category updateCategory(Category category); 
}
