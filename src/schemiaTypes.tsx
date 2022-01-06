export interface IUser {
  name: string;
  password: string;
  email: string;
}

export interface IUserResult {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface IShot {
  x: number;
  y: number;
  points: number;
  game_id: number;
  missed: boolean;
}

export default interface IPlayerCreate {
  name: string;
  user_id: number;
}

export interface IPlayerResult {
  id: number;
  name: string;
  user: IUserResult;
  shots: IShot[];
}

export interface IGameCreate {
  name: string;
  user_id: number;
  player_ids: number[];
  other_team: string;
  date?: string;
}

export interface IGameResult {
  id: number;
  name: string;
  user: IUserResult;
  players: IPlayerResult[];
  shots: IShot[];
  other_team: string;
  date_created: string;
}

export interface ISession {
  base: string;
  token?: string;
  gameId?: number;
}
