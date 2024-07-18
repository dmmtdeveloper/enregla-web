export type User = {
  id: number;
  name: string;
  email: string;
  rut: string;
  branch: {
    id: number;
    location: string;
    address: string;
    municipality: string;
    telephone: string;
    agency: {
      id: number;
      name: string;
    };
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
