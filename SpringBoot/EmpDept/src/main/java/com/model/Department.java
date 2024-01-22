package com.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Department {

    @Id
    private Long deptId;
    private String deptName;
    private String location;


    public Department() {
    }

    public Department(Long deptId, String deptName, String location) {
        this.deptId = deptId;
        this.deptName = deptName;
        this.location = location;
    }

    public Long getDeptId() {
        return deptId;
    }

    public void setDeptId(Long deptId) {
        this.deptId = deptId;
    }

    public String getDeptName() {
        return deptName;
    }

    public void setDeptName(String deptName) {
        this.deptName = deptName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    @Override
    public String toString() {
        return "Department{" + "deptId=" + deptId + 
        		", deptName='" + deptName + '\'' + 
        		", location='" + location + '\'' + 
        		'}';
    }
}