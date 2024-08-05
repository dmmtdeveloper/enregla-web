"use client";
import { usePathname } from "next/navigation";
import Layout from "../ui/layout";
import DashboardModule from "./dashboard";
import UsersModule from "./users";
import SuppliesModule from "./supplies";
import BranchModule from "./branches";
import Login from "./login";

export default function Dashboard() {
  const path = usePathname();

  return (
    <>
      {path === "/admin/login" ? (
        <Login />
      ) : (
        <Layout>
          {path === "/admin/" && <DashboardModule />}
          {path === "/admin/operators" && <UsersModule />}
          {path === "/admin/supplies" && <SuppliesModule />}
          {path === "/admin/branches" && <BranchModule />}
        </Layout>
      )}
    </>
  );
}
