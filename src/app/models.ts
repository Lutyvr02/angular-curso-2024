export interface Address {
    number: string;
    street: string;
    zone: string;
  }
  
  export interface Student {
    name: string;
    lastName: string;
    type: string;
    firstTestScore: number;
    secondTestScore: number;
    finalTestScore: number;
    address: Address;
    country: string;
    province: string;
    messages: string[];
  }
  
  export interface Professor {
    name: string;
    lastName: string;
    type: string;
    subject: string;
    address: Address;
    country: string;
    province: string;
    messages: string[];
  }
  