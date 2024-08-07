import { useEffect, useState } from "react";
import { User } from "../types/user";
import { CreateUser, DeleteUser, EditUser, GetUsers } from "../api/users";
import { Branch } from "../types/branch";
import { GetAllBranches } from "../api/branches";
import useSession from "./useSession";
import { toast } from "react-toastify";

const defaultUser: User = {
  id: 0,
  name: "",
  rut: "",
  email: "",
  branch: { id: 0, address: "" },
  role: { id: 0, name: "" },
};

const userRoles = [
  { id: 2, value: "Supervisor" },
  { id: 3, value: "Operador" },
];

const usersColumns = [
  { label: "Nombre", key: "name" },
  { label: "RUT", key: "rut" },
  { label: "Email", key: "email" },
  { label: "Sucursal", key: "branch" },
  { label: "Cargo", key: "role" },
  { label: "Opciones", key: "options" },
];

export default function useUsers() {
  const { token } = useSession();
  const [branches, setBranches] = useState<Branch[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [usersPage, setUsersPage] = useState<number>(1);
  const [usersRows, setUsersRows] = useState<number>(10);
  const [loadingUsers, setLoadingUsers] = useState<boolean>(false);
  const [searchedUser, setSearchedUser] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [confirmModal, setConfirmModal] = useState<boolean>(false);
  const [user, setUser] = useState<User>(defaultUser);
  const [edit, setEdit] = useState<boolean>(false);

  const notifyMessage = (message: string) => toast.success(message);
  const notifyError = (error: string) => toast.error(error);

  useEffect(() => {
    fetchUsers();
  }, [usersPage, usersRows]);

  useEffect(() => {
    fetchBranches();
  }, [showModal]);

  const fetchBranches = async () => {
    const response = await GetAllBranches({ token });
    console.log(response);
    setBranches(response.branches);
  };

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

  const openModal = () => setShowModal(true);
  const closeModal = () => [setShowModal(false), setUser(defaultUser)];

  const handleUser = (field: string, value: string) => {
    if (field === "branch") {
      const findBranch = branches.find((branch) => branch.address === value);
      setUser({ ...user, branch: { id: findBranch?.id as number, address: findBranch?.address as string } });
    } else if (field === "role") {
      const findRole = userRoles.find((role) => role.value === value);
      setUser({ ...user, role: { id: findRole?.id as number, name: findRole?.value as string } });
    } else setUser({ ...user, [field]: value });
  };

  const selectUser = (user_id: number) => {
    const user = users.find((user) => user.id === user_id);
    if (user) setUser(user), openModal(), setEdit(true);
  };

  const saveUser = async () => {
    const { name, rut, email, branch, role } = user;
    if (!name || !rut || !email || !branch.id || !role.id) {
      notifyError("Por favor complete todos los campos");
      return;
    }
    const response = edit
      ? await EditUser({ token, id: user.id, name, rut, email, role_id: role.id, branch_id: branch.id })
      : await CreateUser({ token, name, rut, email, role_id: role.id, branch_id: branch.id });
    if (response.error) notifyError(response.error);
    else notifyMessage(response.message), closeModal(), fetchUsers();
  };

  const confirmDelete = async () => {
    const response = await DeleteUser({ token, id: user.id });
    console.log(response);
  };

  const deleteUser = async (user_id: number) => {
    const user = users.find((user) => user.id === user_id);
    if (user) setUser(user), setConfirmModal(true);
  };

  const closeConfirmModal = () => setConfirmModal(false);

  console.log("USER: ", user);

  return {
    users,
    filteredUsers,
    usersColumns,
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
    showModal,
    openModal,
    closeModal,
    branches,
    user,
    handleUser,
    userRoles,
    saveUser,
    selectUser,
    deleteUser,
    confirmDelete,
    closeConfirmModal,
    edit,
  };
}
