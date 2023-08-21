export interface teamType {
  name: string;
  password: string;
  sqaudType: string;
  thumbnail: File;
}

export interface collectionTeamType {
  id: string;
  teamName: string;
  password: string;
  sqaudType: string;
  photoUrl: string;
  members: { ign: string; email: ign }[];
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
  thumbnail: File;
  date: string;
  time: string;
}

export interface collectionTournamentType {
  id: string;
  tid: string;
  tournamentName: string;
  code: string;
  mode: string;
  map: string;
  desc: string;
  number: string;
  discord: string;
  twitter: string;
  thumbnail: File;
  date: string;
  time: string;
  entries: collectionTeamType[];
}
