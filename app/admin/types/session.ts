import { User } from "./user";

export type Session = {
  token: string;
  user: User;
};
