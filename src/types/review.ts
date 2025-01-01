export interface IFormReview {
  rating: number;
  review: string;
}

export interface ICustomer {
  fullname: string;
}

export interface IReview {
  rating: number;
  review: string;
  createdAt: string;
  customer: ICustomer;
}
