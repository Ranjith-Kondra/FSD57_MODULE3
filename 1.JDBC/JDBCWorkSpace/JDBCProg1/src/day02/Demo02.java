package day02;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

//Fetch Employee Data based on empId: select * from employee where empId=101
public class Demo02 {
	public static void main(String[] args) {

		Connection con = null;
		Statement stmt = null;
		ResultSet rs = null;

		System.out.print("Enter Employee Name: ");
		String empName= new Scanner(System.in).next();
		System.out.println();
		
		String url = "jdbc:mysql://localhost:3306/fsd57";
		String query = "Select * from employee where empName = '" + empName+"'";
		
		
		try {

			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection(url, "root", "root");

			stmt = con.createStatement();
			rs = stmt.executeQuery(query);

			if (rs.next()) {
				System.out.println("EmpId   : " + rs.getInt(1));
				System.out.println("EmpName : " + rs.getString("empName"));
				System.out.println("Salary  : " + rs.getDouble(3));
				System.out.println("Gender  : " + rs.getString("gender"));
				System.out.println("EmailId : " + rs.getString(5));
				System.out.println("Password: " + rs.getString(6) + "\n");
			} else {
				System.out.println("Employee Record Not Found!!!");
			}
			
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}
	}
}

