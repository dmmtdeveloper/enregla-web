import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { GetVehicleBrands, GetVehicleModels } from "../api/vehicles";
import useSession from "./useSession";

const defaultVehicle = {
  id: 0,
  brand: { id: 0, name: "" },
  model: { id: 0, name: "" },
  year: 0,
};

const vehicleColumns = [
  { label: "Marca", key: "brand" },
  { label: "Modelo", key: "model" },
  { label: "Año", key: "year" },
  { label: "Logo", key: "logo" },
  { label: "Opciones", key: "options" },
];

export default function useVehicle() {
  const { token } = useSession();
  const [vehicleBrands, setVehicleBrands] = useState([]);
  const [totalBrands, setTotalBrands] = useState(0);
  const [vehicleModels, setVehicleModels] = useState([]);
  const [totalModels, setTotalModels] = useState(0);
  const [vehicle, setVehicle] = useState({});
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState("");
  const [edit, setEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  const notifyMessage = (message: string) => toast.success(message);
  const notifyError = (error: string) => toast.error(error);

  useEffect(() => {
    fetchVehicleBrands();
    fetchVehicleModels();
  }, []);

  const fetchVehicleBrands = async () => {
    setLoading(true);
    const response = await GetVehicleBrands({ token, query: `?page=${page}&rows=${rows}` });
    if (response.error) notifyError(response.error), setLoading(false);
    else {
      setLoading(false);
      setVehicleBrands(response.brands);
      setTotalBrands(response.count);
    }
  };

  const fetchVehicleModels = async () => {
    setLoading(true);
    const response = await GetVehicleModels({ token, query: `?page=${page}&rows=${rows}` });
    if (response.error) notifyError(response.error), setLoading(false);
    else {
      setLoading(false);
      setVehicleModels(response.models);
      setTotalModels(response.count);
    }
  };

  console.log(vehicleBrands, vehicleModels);

  const handleVehicle = () => {};
  const handleSearch = (text: string) => setSearched(text);

  const selectVehicle = () => {};
  const deleteVehicle = () => {};
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handlePage = (page: number) => setPage(page);
  const handleRows = (rows: number) => setRows(rows);

  return {
    vehicleBrands,
    vehicleModels,
    totalBrands,
    totalModels,
    vehicle,
    page,
    rows,
    totalPages,
    showModal,
    confirmModal,
    edit,
    loading,
    searched,
    handleSearch,
    vehicleColumns,
    selectVehicle,
    deleteVehicle,
    openModal,
    closeModal,
    handlePage,
    handleRows,
  };
}
