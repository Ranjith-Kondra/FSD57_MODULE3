package day03;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

import com.db.DbConnection;

public class EmployeeByName {
	
	public static void getEmployee() {
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		Connection con = null;
		con = DbConnection.getConnection();
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Student sname");
		String empName = sc.nextLine();
		
		String query = "select * from employee where empName = ?";
	    
		
		try {
			con = DbConnection.getConnection();
			pstmt = con.prepareStatement(query);
			pstmt.setString(1, empName);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				System.out.println("Student details with name :"+empName);
				do {
					System.out.print(rs.getInt(1)+"   ");
					System.out.print(rs.getString(2)+"   ");
					System.out.print(rs.getString(3)+"   ");
					System.out.print(rs.getString(4)+"   ");
					System.out.print(rs.getString(5)+"   ");
					System.out.println(rs.getString(6));
				}while(rs.next());
			} else {
				System.out.println("Please enter a valid employee Name");
			}
		} catch(SQLException e) {
			e.printStackTrace();
		} finally {
			sc.close();
		}
	}


	public static void main(String[] args) {
		getEmployee();
	}

}
