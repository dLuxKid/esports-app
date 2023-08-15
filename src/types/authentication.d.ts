export interface createUserType {
  email: string;
  password: string;
  username: string;
  accountType: string;
  thumbNail: File;
}

export interface loginUserType {
  email: string;
  password: string;
}
