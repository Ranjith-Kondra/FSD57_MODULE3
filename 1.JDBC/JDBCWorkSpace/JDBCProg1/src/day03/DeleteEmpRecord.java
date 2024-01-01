package day03;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

import com.db.DbConnection;

public class DeleteEmpRecord {
	
	public static void delete() {
		PreparedStatement pstmt = null;
		Connection con = null;
		con = DbConnection.getConnection();
		//FetchAllStudents.printAllStudents();
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter Employee id to delete :");
		int empId = sc.nextInt();
		
		String query = "delete from employee where empId = ?";
	    
		
		try {
			con = DbConnection.getConnection();
			pstmt = con.prepareStatement(query);
			pstmt.setInt(1, empId);
			int cnt = pstmt.executeUpdate();
			if(cnt > 0) {
				System.out.println("Employee record delted successfully !!");
				//FetchAllStudents.printAllStudents();
			} else {
				System.out.println("Please enter a valid sid ");
			}
		} catch(SQLException e) {
			e.printStackTrace();
		} finally {
			sc.close();
		}
	}
	
	public static void main(String[] args) {
		delete();
	}

}
