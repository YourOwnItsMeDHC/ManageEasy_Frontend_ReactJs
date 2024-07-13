import React, { useState } from "react";
import { createEmployee } from "../services/api";
import "./EmployeeForm.css"; 

const EmployeeForm = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [ctc, setCtc] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false); 
  const [error, setError] = useState(null); 
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true); 

    try {
      const employee = { name, designation, ctc, email };
      await createEmployee(employee);
      setName("");
      setDesignation("");
      setCtc("");
      setEmail("");
      console.log("Employee created successfully!");
    } catch (error) {
      console.error("Error creating employee:", error);
      setError("Failed to create employee. Please try again."); 
    } finally {
      setSubmitting(false); 
    }
  };

  return (
    <div className="employee-form-container">
      <h2 className="form-title">Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="designation">Designation:</label>
          <input
            type="text"
            id="designation"
            placeholder="Enter designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ctc">CTC:</label>
          <input
            type="number"
            id="ctc"
            placeholder="Enter CTC"
            value={ctc}
            onChange={(e) => setCtc(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="submit-button" disabled={submitting}>
          {submitting ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
