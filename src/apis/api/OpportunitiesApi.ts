
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface Opportunity {
  id: number;
  name: string;
  status: string;
  // Add other fields from the OpportunityDetails schema
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  errorMessage?: string;
}

export async function getOpportunities(): Promise<ApiResponse<Opportunity[]>> {
  try {
    const response = await axios.get<ApiResponse<Opportunity[]>>(
      `${BASE_URL}/opportunities`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching opportunities:', error);
    return { success: false, errorMessage: 'Failed to fetch opportunities' };
  }
}

export async function createOpportunity(
  opportunity: Opportunity
): Promise<ApiResponse<Opportunity>> {
  try {
    const response = await axios.post<ApiResponse<Opportunity>>(
      `${BASE_URL}/opportunities`,
      opportunity
    );
    return response.data;
  } catch (error) {
    console.error('Error creating opportunity:', error);
    return { success: false, errorMessage: 'Failed to create opportunity' };
  }
}

// Add other API functions for updating, deleting, etc. opportunities as needed