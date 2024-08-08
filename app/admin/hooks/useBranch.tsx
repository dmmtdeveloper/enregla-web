import { useEffect, useState } from "react";
import { Branch } from "../types/branch";
import { CreateBranch, DeleteBranch, GetBranches, UpdateBranch } from "../api/branches";
import useSession from "./useSession";
import { toast } from "react-toastify";

const defaultBranch: Branch = {
  id: 0,
  agency: { id: 0, name: "" },
  address: "",
  location: "",
  city: "",
  phone: "",
};

const branchColumns = [
  { label: "Consecionario", key: "agency" },
  { label: "Ubicación", key: "location" },
  { label: "Dirección", key: "address" },
  { label: "Ciudad", key: "city" },
  { label: "Teléfono", key: "phone" },
  { label: "Opciones", key: "options" },
];

export default function useBranch() {
  const { token } = useSession();
  const [branches, setBranches] = useState<Branch[]>([]);
  const [totalBranches, setTotalBranches] = useState<number>(10);
  const [branchPage, setBranchPage] = useState<number>(1);
  const [branchRows, setBranchRows] = useState<number>(10);
  const [loadingBranch, setLoadingBranch] = useState<boolean>(false);
  const [searchedBranch, setSearchedBranch] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [confirmModal, setConfirmModal] = useState<boolean>(false);
  const [branch, setBranch] = useState<Branch>(defaultBranch);
  const [edit, setEdit] = useState<boolean>(false);

  const notifyMessage = (message: string) => toast.success(message);
  const notifyError = (error: string) => toast.error(error);

  useEffect(() => {
    fetchBranches();
  }, [branchPage, branchRows]);

  const fetchBranches = async () => {
    setLoadingBranch(true);
    const response = await GetBranches({ token, query: `?branchPage=${branchPage}&branchRows=${branchRows}` });
    if (response.error) notifyError(response.error), setLoadingBranch(false);
    else {
      setBranches(response.branches);
      setTotalBranches(response.count);
      setLoadingBranch(false);
    }
  };

  const handleBranchPage = (usersPage: number) => setBranchPage(usersPage);
  const handleBranchRows = (usersRows: number) => setBranchRows(usersRows);

  const handleSearchBranch = (text: string) => setSearchedBranch(text);

  const totalBranchPages = Math.ceil(totalBranches / branchRows);

  const branchRow = branches.map((branch) => ({
    id: branch.id,
    agency: branch.agency.name,
    address: branch.address,
    location: branch.location,
    city: branch.city,
    phone: branch.phone,
  }));

  const filteredBranches = branchRow.filter((branch) => {
    return (
      branch.agency.toLowerCase().includes(searchedBranch.toLowerCase()) ||
      branch.address.toLowerCase().includes(searchedBranch.toLowerCase()) ||
      branch.city.toLowerCase().includes(searchedBranch.toLowerCase()) ||
      branch.phone.toLowerCase().includes(searchedBranch.toLowerCase())
    );
  });

  const openModal = () => setShowModal(true);
  const closeModal = () => [setShowModal(false), setBranch(defaultBranch)];

  const handleBranch = (field: string, value: string) => {
    setBranch({ ...branch, [field]: value });
  };

  const selectBranch = (branch_id: number) => {
    const branch = branches.find((branch) => branch.id === branch_id);
    if (branch) setBranch(branch), openModal(), setEdit(true);
  };

  const saveBranch = async () => {
    const { agency, address, location, city } = branch;
    if (!agency || !address || !location || !city) {
      notifyError("Por favor complete todos los campos");
      return;
    }
    const response = edit ? await UpdateBranch({ token, id: branch.id }) : await CreateBranch({ token });
    if (response.error) notifyError(response.error);
    else notifyMessage(response.message), closeModal(), fetchBranches();
  };

  const confirmDelete = async () => {
    const response = await DeleteBranch({ token, id: branch.id });
    if (response.error) notifyError(response.error);
    else {
      notifyMessage(response.message);
      closeConfirmModal();
      fetchBranches();
    }
  };

  const deleteBranch = async (branch_id: number) => {
    const branch = branches.find((branch) => branch.id === branch_id);
    if (branch) setBranch(branch), setConfirmModal(true);
  };

  const closeConfirmModal = () => setConfirmModal(false);

  return {
    branches,
    filteredBranches,
    branchColumns,
    branchRows,
    handleBranchPage,
    handleBranchRows,
    totalBranchPages,
    totalBranches,
    branchPage,
    branchRow,
    loadingBranch,
    handleSearchBranch,
    searchedBranch,
    openModal,
    closeModal,
    showModal,
    confirmModal,
    branch,
    edit,
    handleBranch,
    selectBranch,
    saveBranch,
    confirmDelete,
    deleteBranch,
    closeConfirmModal,
  };
}
