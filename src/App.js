import React, { useState } from "react";
import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import VendorForm from "./components/VendorForm";
import VendorList from "./components/VendorList";
import EmailForm from "./components/EmailForm";
import SentEmails from "./components/SentEmails";

const App = () => {
  const [activeTab, setActiveTab] = useState("employee");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <h2 className="sidebar-title">ManageEasy By Deepak</h2>
        <ul className="sidebar-menu">
          <li
            className={`sidebar-item ${
              activeTab === "employee" ? "active" : ""
            }`}
            style={{ textAlign: "center", height: "40px", lineHeight: "40px" }}
            onClick={() => handleTabClick("employee")}
          >
            Employees
          </li>
          <li
            className={`sidebar-item ${
              activeTab === "employeeList" ? "active" : ""
            }`}
            style={{ textAlign: "center", height: "40px", lineHeight: "40px" }}
            onClick={() => handleTabClick("employeeList")}
          >
            Employee List
          </li>
          <li
            className={`sidebar-item ${activeTab === "vendor" ? "active" : ""}`}
            style={{ textAlign: "center", height: "40px", lineHeight: "40px" }}
            onClick={() => handleTabClick("vendor")}
          >
            Vendors
          </li>
          <li
            className={`sidebar-item ${
              activeTab === "vendorList" ? "active" : ""
            }`}
            style={{ textAlign: "center", height: "40px", lineHeight: "40px" }}
            onClick={() => handleTabClick("vendorList")}
          >
            Vendor List
          </li>
          <li
            className={`sidebar-item ${activeTab === "email" ? "active" : ""}`}
            style={{ textAlign: "center", height: "40px", lineHeight: "40px" }}
            onClick={() => handleTabClick("email")}
          >
            Send Email
          </li>
          <li
            className={`sidebar-item ${
              activeTab === "sentEmails" ? "active" : ""
            }`}
            style={{ textAlign: "center", height: "40px", lineHeight: "40px" }}
            onClick={() => handleTabClick("sentEmails")}
          >
            Sent Emails
          </li>
        </ul>
      </div>
      <div className="main-content">
        {activeTab === "employee" && (
          <>
            <EmployeeForm />
          </>
        )}
        {activeTab === "employeeList" && (
          <>
            <EmployeeList />
          </>
        )}
        {activeTab === "vendor" && (
          <>
            <VendorForm />
          </>
        )}
        {activeTab === "vendorList" && (
          <>
            <VendorList />
          </>
        )}
        {activeTab === "email" && <EmailForm />}
        {activeTab === "sentEmails" && <SentEmails />}
      </div>
      
      <div
        style={{
          textAlign: "center",
          position: "fixed",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "14px",
          color: "#666",
        }}
      >
        &copy; {new Date().getFullYear()} Deepak Chourasiya
      </div>
    </div>
  );
};

export default App;
