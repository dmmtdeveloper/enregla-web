export type User = {
  id: number;
  name: string;
  email: string;
  rut: string;
  branch: {
    id: number;
    address: string;
  };
  role: { id: number; name: string };
};

export type UserRows = {
  id: number;
  name: string;
  email: string;
  rut: string;
  branch: string;
  role: string;
};
