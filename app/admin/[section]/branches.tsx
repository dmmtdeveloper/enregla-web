import { Spinner } from "@nextui-org/spinner";
import CustomTable from "../ui/table";
import CustomPagination from "../ui/pagination";
import Header from "../ui/header";
import useBranch from "../hooks/useBranch";
import CustomButton from "../ui/button";
import CustomModal from "../ui/modal";

export default function BranchModule() {
  const {
    filteredBranches,
    branchColumns,
    totalBranches,
    branchRows,
    loadingBranch,
    searchedBranch,
    selectBranch,
    deleteBranch,
    branchRow,
    branchPage,
    branch,
    totalBranchPages,
    openModal,
    closeModal,
    showModal,
    closeConfirmModal,
    confirmDelete,
    confirmModal,
    handleBranch,
    handleBranchPage,
    handleBranchRows,
    handleSearchBranch,
    saveBranch,
    edit,
  } = useBranch();
  return (
    <>
      <Header
        title="Sucursales"
        fromDate={new Date().toISOString().slice(0, 10)}
        toDate={new Date().toISOString().slice(0, 10)}
        searchedText={searchedBranch}
        searchText={handleSearchBranch}
      />
      <div className="w-full h-[10%] flex items-center justify-end mb-[1%]">
        <CustomButton text="Nuevo" onClick={openModal} />
      </div>
      <div className="w-full h-[70%]">
        {loadingBranch ? (
          <div className="w-full h-full flex items-center justify-center">
            <Spinner size="md" color="default" />
          </div>
        ) : (
          <CustomTable
            columns={branchColumns}
            rows={searchedBranch !== "" ? filteredBranches : branchRow}
            handleEdit={selectBranch}
            handleDelete={deleteBranch}
          />
        )}
      </div>
      <div className="w-full h-[5%]">
        <CustomPagination
          page={branchPage}
          rows={branchRows}
          totalData={totalBranches}
          totalpages={totalBranchPages}
          handlePage={handleBranchPage}
          handleRows={handleBranchRows}
        />
      </div>
      {showModal && (
        <CustomModal
          isOpen={showModal}
          onClose={closeModal}
          title={edit ? "Editar sucursal" : "Nueva sucursal"}
          action={saveBranch}
        >
          <div>jhasjas</div>
        </CustomModal>
      )}
      {confirmModal && (
        <CustomModal
          isOpen={confirmModal}
          onClose={closeConfirmModal}
          title="Eliminar sucursal"
          action={confirmDelete}
          actionTitle="Eliminar"
        >
          <div className="w-full h-fit">
            <h4 className="text-lg font-semibold">Realmente desea eliminar la sucursal {branch.address}</h4>
          </div>
        </CustomModal>
      )}
    </>
  );
}
