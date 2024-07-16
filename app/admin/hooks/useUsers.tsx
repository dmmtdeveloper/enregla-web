import { useEffect, useState } from "react";
import { User } from "../types/user";
import { GetUsers } from "../api/users";
import useSession from "./useSession";

const usersColumns = [
  { label: "Nombre", key: "name" },
  { label: "Email", key: "email" },
  { label: "Acciones", key: "actions" },
];

export default function useUsers() {
  const { session } = useSession();
  const [users, setUsers] = useState<User[]>([]);
  const [totalUsers, setTotalUsers] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(10);

  useEffect(() => {
    fetchUsers();
  }, [page, rows]);

  const fetchUsers = async () => {
    const response = await GetUsers({ token: session.token, query: `?page=${page}&rows=${rows}` });
    setUsers(response.users);
    setTotalUsers(response.count);
  };

  const handlePage = (page: number) => setPage(page);
  const handleRows = (rows: number) => setRows(rows);

  const totalPages = Math.ceil(totalUsers / rows);

  return { users, usersColumns, handlePage, handleRows, totalPages, totalUsers, page, rows };
}
