import { useEffect, useState } from "react";
import { User } from "../types/user";
import { GetUsers } from "../api/users";
import useSession from "./useSession";

const branchColumns = [
  { label: "Nombre", key: "name" },
  { label: "RUT", key: "rut" },
  { label: "Email", key: "email" },
  { label: "Sucursal", key: "branch" },
  { label: "Cargo", key: "role" },
  { label: "Opciones", key: "options" },
];

export default function useBranch() {
  const { token, user } = useSession();
  const [users, setUsers] = useState<User[]>([]);
  const [totalUsers, setTotalUsers] = useState<number>(10);
  const [usersPage, setUsersPage] = useState<number>(1);
  const [usersRows, setUsersRows] = useState<number>(10);
  const [loadingUsers, setLoadingUsers] = useState<boolean>(false);
  const [searchedUser, setSearchedUser] = useState<string>("");

  useEffect(() => {
    fetchUsers();
  }, [usersPage, usersRows]);

  const fetchUsers = async () => {
    setLoadingUsers(true);
    const response = await GetUsers({ token, query: `?page=${usersPage}&rows=${usersRows}` });
    if (response.error) {
      setLoadingUsers(false);
    } else {
      setUsers(response.users);
      setTotalUsers(response.count);
      setLoadingUsers(false);
    }
  };

  const handleUsersPage = (usersPage: number) => setUsersPage(usersPage);
  const handleUsersRows = (usersRows: number) => setUsersRows(usersRows);

  const handleSearchUser = (text: string) => setSearchedUser(text);

  const totalUsersPages = Math.ceil(totalUsers / usersRows);

  const userRows = users.map((user) => ({
    id: user.id,
    name: user.name,
    rut: user.rut,
    email: user.email,
    branch: user.branch.address,
    role: user.role.name,
  }));

  const filteredUsers = userRows.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchedUser.toLowerCase()) ||
      user.rut.toLowerCase().includes(searchedUser.toLowerCase()) ||
      user.email.toLowerCase().includes(searchedUser.toLowerCase()) ||
      user.branch.toLowerCase().includes(searchedUser.toLowerCase()) ||
      user.role.toLowerCase().includes(searchedUser.toLowerCase())
    );
  });

  return {
    users,
    filteredUsers,
    branchColumns,
    userRows,
    handleUsersPage,
    handleUsersRows,
    totalUsersPages,
    totalUsers,
    usersPage,
    usersRows,
    loadingUsers,
    handleSearchUser,
    searchedUser,
  };
}
