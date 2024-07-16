"use client";
import { usePathname } from "next/navigation";
import useUsers from "../hooks/useUsers";
import Layout from "../ui/layout";
import CustomTable from "../ui/table";
import Header from "../ui/header";
import CustomPagination from "../ui/pagination";
import { Spinner } from "@nextui-org/spinner";

export default function Dashboard() {
  const path = usePathname();
  const { users, usersColumns, handlePage, handleRows, totalPages, totalUsers, page, rows, loading } = useUsers();

  const title = path === "/admin/dashboard" ? "Reportes" : path === "/admin/operators" ? "Operadores" : "Insumos";

  return (
    <Layout>
      <Header
        title={title}
        fromDate={new Date().toISOString().slice(0, 10)}
        toDate={new Date().toISOString().slice(0, 10)}
        searchedText=""
        searchText={() => {}}
      />
      <div className="w-full h-[70%]">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Spinner size="md" color="default" />
          </div>
        ) : (
          <CustomTable columns={usersColumns} rows={users} />
        )}
      </div>
      <div className="w-full h-[5%]">
        <CustomPagination
          page={page}
          rows={rows}
          totalData={totalUsers}
          totalpages={totalPages}
          handlePage={handlePage}
          handleRows={handleRows}
        />
      </div>
    </Layout>
  );
}
