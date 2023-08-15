import { Timestamp } from "firebase/firestore";

export interface teamType {
  name: string;
  password: string;
  sqaudType: string;
  thumbnail: File;
}

export interface tournamentType {
  tournamentName: string;
  code: string;
  squadType: string;
  map: string;
  desc: string;
  number: string;
  discord: string;
  twitter: string;
  thumbnail: File | null;
  startDate: Timestamp;
  time: Timestamp;
}
