package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Product;

@Service
public class ProductDao {
	

	//Implementing Dependency Injection for ProductRepository
	@Autowired
	ProductRepository productRepository;

	public List<Product> getAllProducts() {
		return productRepository.findAll();
		
	}
	
	

}
