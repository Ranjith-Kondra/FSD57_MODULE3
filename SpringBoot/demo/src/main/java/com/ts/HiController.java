package com.ts;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class HiController {
	@RequestMapping("SayHi")
	public String sayHi(){
		return "Hi EveryOne!!!";
	}
    
	@RequestMapping("sayHello")
	public String sayHello(){
		return "Hello EveryOne!!!";
	}
}
