export interface createUserType {
  email: string;
  password: string;
  username: string;
  accountType: string;
  thumbNail: File;
}

export interface teamType {
  name: string;
  password: string;
  sqaudType: string;
  thumbnail: File;
}

export interface loginUserType {
  email: string;
  password: string;
}
