
import axios from 'axios';

interface UserRegistrationRequest {
  username: string;
  password: string;
  email: string;
  role: string;
}

interface UserRegistrationResponse {
  success: boolean;
  errorMessage?: string;
}

export const registerUser = async (request: UserRegistrationRequest): Promise<UserRegistrationResponse> => {
  try {
    const response = await axios.post<UserRegistrationResponse>('https://api.example.com/register', request);
    return response.data;
  } catch (error) {
    throw new Error('Failed to register user');
  }
};