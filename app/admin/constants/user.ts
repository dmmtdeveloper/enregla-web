import { User } from "../types/user";

export const defaultUser: User = {
  id: 0,
  name: "",
  email: "",
  rut: "",
  branch: {
    id: 0,
    address: "",
    location: "",
    municipality: "",
    telephone: "",
    agency: {
      id: 0,
      name: "",
    },
  },
  role: {
    id: 0,
    name: "",
  },
};
