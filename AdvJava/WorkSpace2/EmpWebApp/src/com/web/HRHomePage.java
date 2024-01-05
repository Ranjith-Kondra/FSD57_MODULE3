
package com.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/HRHomePage")
public class HRHomePage extends HttpServlet {
	
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		
		//String emailId = request.getParameter("emailId");
		
		HttpSession session = request.getSession(false);
		String emailId = (String) session.getAttribute("emailId");

		out.println("<h3 style='color:green'>Welcome "+emailId+"!</h3>");
		
		out.println("<html>");
		out.println("<body bgcolor='lightyellow' text='green'>");
		out.println("<form align='right'>");
		out.println("<a href='Logout'>Logout</a>");
		out.println("</form>");
		out.println("<center>");
		out.println("<h1>Welcome to HrHomePage</h1>");
		out.println("<h3>");
		out.println("<a href ='GetAllEmps'>GetAllEmployees</a> &nbsp; &nbsp");
		out.println("<a href ='GetEmpById.html'>GetEmpById</a>");
		out.println("</h3");
		
		
		out.println("</center>");
		out.println("</body>");
		out.println("</html>");
		
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}