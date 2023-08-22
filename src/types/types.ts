
// User types
export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
}

// Employee types
export interface Employee {
  id: number;
  name: string;
  contactInfo: string;
  role: string;
}

// Lead types
export interface Lead {
  id: number;
  name: string;
  contactInfo: string;
  status: string;
}

// Opportunity types
export interface Opportunity {
  id: number;
  name: string;
  contactInfo: string;
  status: string;
}

// Task types
export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

// API response types
export interface ApiResponse {
  success: boolean;
  errorMessage?: string;
}

// API request types
export interface UserRegistrationRequest {
  username: string;
  password: string;
  email: string;
  role: string;
}

export interface EmployeeDetailsRequest {
  // Define the fields for employee details request here
}

export interface LeadDetailsRequest {
  // Define the fields for lead details request here
}

export interface OpportunityDetailsRequest {
  // Define the fields for opportunity details request here
}

export interface TaskDetailsRequest {
  // Define the fields for task details request here
}