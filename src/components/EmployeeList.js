import React, { useEffect, useState } from "react";
import { getAllEmployees } from "../services/api";
import "./EmployeeList.css";
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const response = await getAllEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  return (
    <div className="employee-list-container">
      <h2 className="list-title">Employees List</h2>
      <ul className="employee-list">
        {employees.map((employee) => (
          <li key={employee.id} className="employee-item">
            <div className="employee-info">
              <div className="info-row">
                <span className="label">Name:</span>
                <span className="value">{employee.name}</span>
              </div>
              <div className="info-row">
                <span className="label">Designation:</span>
                <span className="value">{employee.designation}</span>
              </div>
              <div className="info-row">
                <span className="label">CTC:</span>
                <span className="value">{employee.ctc}</span>
              </div>
              <div className="info-row">
                <span className="label">Email:</span>
                <span className="value">{employee.email}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
