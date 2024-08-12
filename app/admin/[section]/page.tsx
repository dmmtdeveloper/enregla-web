"use client";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Layout from "../ui/layout";
import Login from "./login";
import DashboardModule from "./dashboard";

const UsersModule = dynamic(() => import("./users"), { ssr: false });
const SuppliesModule = dynamic(() => import("./supplies"), { ssr: false });
const BranchModule = dynamic(() => import("./branches"), { ssr: false });
const VehiclesModule = dynamic(() => import("./vehicles"), { ssr: false });

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
          {path === "/admin/vehicles" && <VehiclesModule />}
        </Layout>
      )}
    </>
  );
}
