import { useState } from "react";
import { User } from "../types/user";

const usersColumns = [
  { label: "Nombre", key: "name" },
  { label: "Email", key: "email" },
  { label: "Acciones", key: "actions" },
];

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  return { users, usersColumns };
}
