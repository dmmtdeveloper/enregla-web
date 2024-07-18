"use client";
import { usePathname } from "next/navigation";
import useUsers from "../hooks/useUsers";
import Layout from "../ui/layout";
import CustomTable from "../ui/table";
import Header from "../ui/header";
import CustomPagination from "../ui/pagination";
import { Spinner } from "@nextui-org/spinner";
import UsersModule from "./users";

export default function Dashboard() {
  const path = usePathname();
  const {
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
    filteredUsers,
  } = useUsers();

  const title = path === "/admin/dashboard" ? "Reportes" : path === "/admin/operators" ? "Operadores" : "Insumos";

  return (
    <Layout>
      <Header
        title={title}
        fromDate={new Date().toISOString().slice(0, 10)}
        toDate={new Date().toISOString().slice(0, 10)}
        searchedText={path === "/admin/operators" ? searchedUser : path === "/admin/supplies" ? "" : ""}
        searchText={path === "/admin/operators" ? handleSearchUser : path === "/admin/supplies" ? () => {} : () => {}}
      />
      {path === "/admin/operators" && (
        <UsersModule
          loadingUsers={loadingUsers}
          usersColumns={usersColumns}
          userRows={searchedUser ? filteredUsers : userRows}
          usersPage={usersPage}
          usersRows={usersRows}
          handleUsersPage={handleUsersPage}
          handleUsersRows={handleUsersRows}
          totalUsers={totalUsers}
          totalUsersPages={totalUsersPages}
        />
      )}
    </Layout>
  );
}
