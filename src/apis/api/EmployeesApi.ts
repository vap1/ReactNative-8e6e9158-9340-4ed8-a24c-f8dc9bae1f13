
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface Employee {
  id: number;
  name: string;
  email: string;
  role: string;
}

export async function getEmployees(): Promise<Employee[]> {
  try {
    const response = await axios.get<Employee[]>(`${BASE_URL}/employees`);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
}

export async function addEmployee(employee: Employee): Promise<void> {
  try {
    await axios.post(`${BASE_URL}/employees`, employee);
  } catch (error) {
    console.error('Error adding employee:', error);
    throw error;
  }
}

export async function updateEmployee(employee: Employee): Promise<void> {
  try {
    await axios.put(`${BASE_URL}/employees/${employee.id}`, employee);
  } catch (error) {
    console.error('Error updating employee:', error);
    throw error;
  }
}

export async function deleteEmployee(employeeId: number): Promise<void> {
  try {
    await axios.delete(`${BASE_URL}/employees/${employeeId}`);
  } catch (error) {
    console.error('Error deleting employee:', error);
    throw error;
  }
}