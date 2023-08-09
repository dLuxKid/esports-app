export interface createUserType {
  email: string;
  password: string;
  username: string;
  thumbNail: File | null;
}

export interface loginUserType {
  email: string;
  password: string;
}
