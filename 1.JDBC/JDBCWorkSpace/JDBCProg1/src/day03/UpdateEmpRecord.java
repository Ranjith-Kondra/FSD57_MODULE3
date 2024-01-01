package day03;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

import com.db.DbConnection;

public class UpdateEmpRecord {
	
	public static void update() {
		PreparedStatement pstmt = null;
		Connection con = null;
		con = DbConnection.getConnection();
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Employee empName,email and empId to Update");
		String empName = sc.nextLine();
		String email = sc.next();
		int empId = sc.nextInt();
		
		String query = "update employee set empName = ? , email = ? where empId = ?";
	    
		
		try {
			con = DbConnection.getConnection();
			pstmt = con.prepareStatement(query);
			pstmt.setString(1, empName);
			pstmt.setString(2, email);
			pstmt.setInt(3, empId);
		     EmployeeById.getEmployee(empId);
			
			System.out.println("==================================================================");
			int cnt = pstmt.executeUpdate();
			if(cnt > 0) {
				System.out.println("Employee Record Updated Successfully!!");
				EmployeeById.getEmployee(empId);
			} else {
				System.out.println("Update failed !!");
			}
		} catch(SQLException e) {
			e.printStackTrace();
		} finally {
			sc.close();
		}
	}


	public static void main(String[] args) {
		update();
	}

}