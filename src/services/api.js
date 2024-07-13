import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export const createEmployee = (employee) => {
  return axios.post(`${API_BASE_URL}/api/employees`, employee);
};

export const getAllEmployees = () => {
  return axios.get(`${API_BASE_URL}/api/employees`);
};

export const createVendor = (vendor) => {
  return axios.post(`${API_BASE_URL}/api/vendors`, vendor);
};

export const getAllVendors = () => {
  return axios.get(`${API_BASE_URL}/api/vendors`);
};

export const sendEmail = async (vendors) => {
  try {
    await axios.post(`${API_BASE_URL}/api/vendors/send-email`, vendors);
    console.log("Emails sent successfully!");
  } catch (error) {
    console.error("Error sending emails:", error);
  }
};

export const getAllSentEmails = () => {
  return axios.get(`${API_BASE_URL}/api/vendors/sent-emails`);
};
