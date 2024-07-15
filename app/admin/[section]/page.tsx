"use client";
import { usePathname } from "next/navigation";
import useUsers from "../hooks/useUsers";
import Layout from "../ui/layout";
import CustomTable from "../ui/table";
import Header from "../ui/header";

export default function Dashboard() {
  const path = usePathname();
  const { usersColumns } = useUsers();

  const title =
    path === "/admin/dashboard"
      ? "Reportes"
      : path === "/admin/operators"
      ? "Operadores"
      : "Insumos";

  return (
    <Layout>
      <Header
        title={title}
        fromDate={new Date().toISOString().slice(0, 10)}
        toDate={new Date().toISOString().slice(0, 10)}
        searchedText=""
        searchText={() => {}}
      />
    </Layout>
  );
}
