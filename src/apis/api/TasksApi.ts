
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

export interface UserRegistrationResponse {
  success: boolean;
  errorMessage?: string;
}

export async function getTasks(): Promise<Task[]> {
  try {
    const response = await axios.get<Task[]>(`${BASE_URL}/tasks`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch tasks');
  }
}

export async function createTask(task: Task): Promise<UserRegistrationResponse> {
  try {
    const response = await axios.post<UserRegistrationResponse>(`${BASE_URL}/tasks`, task);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create task');
  }
}

export async function updateTask(task: Task): Promise<UserRegistrationResponse> {
  try {
    const response = await axios.put<UserRegistrationResponse>(`${BASE_URL}/tasks/${task.id}`, task);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update task');
  }
}

export async function deleteTask(taskId: number): Promise<UserRegistrationResponse> {
  try {
    const response = await axios.delete<UserRegistrationResponse>(`${BASE_URL}/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete task');
  }
}