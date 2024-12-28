import { Document } from "@contentful/rich-text-types";

export interface FormValuesCustomer {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  referralCode?: string;
  avatar?: string
  role?: "customer" | "organizer"
}

export interface FormValuesOrganizer {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
