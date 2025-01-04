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
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IOrganizerProfile {
  fullname: string;
  username: string;
  email: string;
  avatar: string;
  isVerified: boolean;
}

export interface ICustomerProfile {
  id: number;
  fullname: string;
  username: string;
  email: string;
  avatar: string;
  isVerified: boolean;
  referralCode: string;
  CustomerCoupon: ICustomerCoupon;
}

interface ICustomerCoupon {
  percentage: number;
  isRedeem: boolean;
  expiredAt: string;
  createdAt: string;
}
