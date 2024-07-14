"use client";
import useUsers from "../hooks/useUsers";
import Layout from "../ui/layout";
import CustomTable from "../ui/table";

export default function Dashboard() {
  const { usersColumns } = useUsers();
  return (
    <Layout>
      <h1>menu</h1>
      <CustomTable columns={usersColumns} rows={[]} />
    </Layout>
  );
}
