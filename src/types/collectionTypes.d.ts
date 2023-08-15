export interface teamType {
  name: string;
  password: string;
  sqaudType: string;
  thumbnail: File;
}

export interface tournamentType {
  tournamentName: string;
  code: string;
  mode: string;
  map: string;
  desc: string;
  number: string;
  discord: string;
  twitter: string;
  thumbnail: File | null;
  date: Date;
}
