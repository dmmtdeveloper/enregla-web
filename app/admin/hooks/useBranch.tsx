import { useEffect, useState } from "react";
import { Branch } from "../types/branch";
import { GetBranches } from "../api/branches";
import useSession from "./useSession";

const branchColumns = [
  { label: "Consecionario", key: "agency" },
  { label: "Ubicación", key: "location" },
  { label: "Dirección", key: "address" },
  { label: "Comuna", key: "municipality" },
  { label: "Ciudad", key: "city" },
  { label: "Teléfono", key: "phone" },
  { label: "Opciones", key: "options" },
];

export default function useBranch() {
  const { token } = useSession();
  const [branches, setBranches] = useState<Branch[]>([]);
  const [totalBranches, setTotalBranches] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(false);
  const [searched, setSearched] = useState<string>("");

  useEffect(() => {
    fetchBranches();
  }, [page, rows]);

  const fetchBranches = async () => {
    setLoading(true);
    const response = await GetBranches({ token, query: `?page=${page}&rows=${rows}` });
    if (response.error) {
      setLoading(false);
    } else {
      console.log("response: ", response);

      setBranches(response.branches);
      setTotalBranches(response.count);
      setLoading(false);
    }
  };

  const handlePage = (usersPage: number) => setPage(usersPage);
  const handleRows = (usersRows: number) => setRows(usersRows);

  const handleSearch = (text: string) => setSearched(text);

  const totalPages = Math.ceil(totalBranches / rows);

  const branchRows = branches.map((branch) => ({
    id: branch.id,
    agency: branch.agency.name,
    address: branch.address,
    location: branch.location,
    municipality: branch.municipality,
    city: branch.city,
    phone: branch.phone,
  }));

  const filteredBranches = branchRows.filter((branch) => {
    return (
      branch.agency.toLowerCase().includes(searched.toLowerCase()) ||
      branch.address.toLowerCase().includes(searched.toLowerCase()) ||
      branch.municipality.toLowerCase().includes(searched.toLowerCase()) ||
      branch.city.toLowerCase().includes(searched.toLowerCase()) ||
      branch.phone.toLowerCase().includes(searched.toLowerCase())
    );
  });

  return {
    branches,
    filteredBranches,
    branchColumns,
    rows,
    handlePage,
    handleRows,
    totalPages,
    totalBranches,
    page,
    branchRows,
    loading,
    handleSearch,
    searched,
  };
}
