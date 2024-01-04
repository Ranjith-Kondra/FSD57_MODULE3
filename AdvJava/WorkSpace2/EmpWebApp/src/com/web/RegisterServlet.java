package com.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet {
	
	 protected void doGet(HttpServletRequest request, HttpServletResponse response)
	            throws ServletException, IOException {

	        response.setContentType("text/html");
	        PrintWriter out = response.getWriter();

	        String ename = request.getParameter("EmployeeName");
	        String email = request.getParameter("EmployeeEmailid");
	        String password = request.getParameter("Password");
	        String MobileNo = request.getParameter("MobileNo");
	        String gender = request.getParameter("Gender");

	        out.println("<html>");
	        
	        out.println("<body bgcolor='yellow' text='black'>");
	        out.println("<center>");
	        out.println("<h1>Registration Details</h1>");
	        out.println("<p>Employee Name: " + ename + "</p>");
	        out.println("<p>Email: " + email + "</p>");
	        out.println("<p>Password: " + password + "</p>");
	        out.println("<p>MobileNo: " + MobileNo + "</p>");
	        out.println("<p>Gender: " + gender + "</p>");
	        out.println("</center>");
	        out.println("</body>");
	        out.println("</html>");
	        
	        System.out.println("Employee Name: "+ename);
	        System.out.println("Email: " +email);
	        System.out.println("password : " +password);
	        System.out.println("MobileNo : " +MobileNo);
	        System.out.println("Gender : " +gender);
	    }


	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}