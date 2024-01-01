package day03;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

import com.db.DbConnection;

public class EmployeeById {
	
	public static void getEmployee(int empId) {
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		Connection con = null;
		con = DbConnection.getConnection();
		
		String query = "select * from employee where empId = ?";
	    
		
		try {
			con = DbConnection.getConnection();
			pstmt = con.prepareStatement(query);
			pstmt.setInt(1, empId);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				System.out.println("Student details with id :"+empId);
				do {
					System.out.print(rs.getInt(1)+"   ");
					System.out.print(rs.getString(2)+"   ");
					System.out.print(rs.getString(3)+"   ");
					System.out.print(rs.getString(4)+"   ");
					System.out.print(rs.getString(5)+"   ");
					System.out.println(rs.getString(6));
				}while(rs.next());
			} else {
				System.out.println("Please enter a valid Employee Id");
			}
		} catch(SQLException e) {
			e.printStackTrace();
		} 
	}

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Employee empId");
		int empId = sc.nextInt();
		
		getEmployee(empId);
		sc.close();
	}


}
