package com.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeDao {

	@Autowired
	EmployeeRepository employeeRepository;
}
