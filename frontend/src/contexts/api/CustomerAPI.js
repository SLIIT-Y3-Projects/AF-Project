import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class CustomerAPI {
  // Customer login
  static login(values) {
    return axios.post(
      `${BASE_URL}/api/customer/login`,
      values,
      requestConfigJson
    );
  }

  // Customer register
  static register(values) {
    return axios.post(
      `${BASE_URL}/api/customer/register`,
      values,
      requestConfigJson
    );
  }

  // Get all Customers
  static getCustomers() {
    return axios.get(`${BASE_URL}/api/customer/`, requestConfig);
  }

  // Get one Customer
  static getOneCustomer(id) {
    return axios.get(`${BASE_URL}/api/customer/${id}`, requestConfigJson);
  }

  // Edit Customer
  static editCustomer(id, newCustomer) {
    return axios.put(
      `${BASE_URL}/api/customer/update/${id}`,
      newCustomer,
      requestConfigJson
    );
  }

  // Delete Customer
  static deleteCustomer(id) {
    return axios.delete(`${BASE_URL}/api/customer/delete/${id}`, requestConfig);
  }

  // changeComplaintStatus
static async changeAccountStatus(id, status) {
  const response = await axios.patch(`${BASE_URL}/api/customer/status/${id}`, { status }, requestConfigJson);
  return response.data;
}
}



export default CustomerAPI;
