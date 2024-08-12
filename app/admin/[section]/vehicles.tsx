import dynamic from "next/dynamic";
import { Spinner } from "@nextui-org/spinner";
import CustomTable from "../ui/table";
import CustomPagination from "../ui/pagination";
import Header from "../ui/header";
import CustomButton from "../ui/button";
import useVehicle from "../hooks/useVehicle";

const CustomModal = dynamic(() => import("@/app/admin/ui/modal"), { loading: () => <p>Cargando...</p> });
const VehicleForm = dynamic(() => import("@/app/admin/ui/forms/vehicleform"), { loading: () => <p>Cargando...</p> });

export default function VehiclesModule() {
  const {
    searched,
    handleSearch,
    loading,
    vehicleColumns,
    page,
    totalPages,
    rows,
    confirmModal,
    showModal,
    edit,
    openModal,
    closeModal,
    selectVehicle,
    deleteVehicle,
    handlePage,
    handleRows,
    filteredVehicles,
    vehicleRows,
    vehicle,
    closeConfirmModal,
    confirmDelete,
    handleVehicle,
    saveVehicle,
  } = useVehicle();
  return (
    <>
      <Header title="Vehículos" searchedText={searched} searchText={handleSearch} />
      <div className="w-full h-[10%] flex items-center justify-end mb-[1%]">
        <CustomButton text="Nuevo" onClick={openModal} />
      </div>
      <div className="w-full h-[70%]">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Spinner size="md" color="default" />
          </div>
        ) : (
          <CustomTable
            columns={vehicleColumns}
            rows={searched !== "" ? filteredVehicles : vehicleRows}
            handleEdit={selectVehicle}
            handleDelete={deleteVehicle}
          />
        )}
      </div>
      <div className="w-full h-[5%]">
        <CustomPagination
          page={page}
          rows={rows}
          totalData={10}
          totalpages={totalPages}
          handlePage={handlePage}
          handleRows={handleRows}
        />
      </div>
      <CustomModal
        isOpen={showModal}
        onClose={closeModal}
        title={edit ? "Editar vehículo" : "Nuevo vehículo"}
        action={saveVehicle}
      >
        <VehicleForm vehicle={vehicle} handleVehicle={handleVehicle} />
      </CustomModal>
      <CustomModal
        isOpen={confirmModal}
        onClose={closeConfirmModal}
        title="Eliminar usuario"
        action={confirmDelete}
        actionTitle="Eliminar"
      >
        <div className="w-full h-fit">
          <h4 className="text-lg font-semibold">
            Realmente desea eliminar {vehicle.brand} - {vehicle.model}
          </h4>
        </div>
      </CustomModal>
    </>
  );
}
