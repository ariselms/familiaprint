export interface User {
  id: number | null; // starts at 1 auto increment
  firstname: string;
  lastname: string;
  email: string; // make it required and unique
  tel: string;
  role: string;
  emailCodeNumber: string;
  emailCodeExpiry: Date | null;
  sessionToken: string;
  sessionTokenExpiry: Date | null;
  createdAt: Date;
  updatedAt: Date | null;
}