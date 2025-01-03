export interface FormValuesCustomer {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  referralCode?: string;
  avatar?: string;
}

export interface FormValuesOrganizer {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IOrganizerProfile {
  name: string;
  email: string;
  avatar: string;
}

export interface ICustomerProfile {
  id: number;
  fullname: string;
  username: string;
  email: string;
  avatar: string;
  isVerified: boolean;
  referralCode: string;
}
