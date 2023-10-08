export type UserType = {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  profilePic?: string;
  address?: string;
  mobileNumber?: string;
};

export type LoginType = Pick<UserType, "email" | "password">;
