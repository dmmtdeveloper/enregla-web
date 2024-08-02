import { Spinner } from "@nextui-org/spinner";
import CustomTable from "../ui/table";
import CustomPagination from "../ui/pagination";
import Header from "../ui/header";
import useBranch from "../hooks/useBranch";

export default function BranchModule() {
  const {
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
  } = useBranch();
  return (
    <>
      <Header
        title="Sucursales"
        fromDate={new Date().toISOString().slice(0, 10)}
        toDate={new Date().toISOString().slice(0, 10)}
        searchedText={searched}
        searchText={handleSearch}
      />
      <div className="w-full h-[70%]">
        {/* {loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Spinner size="md" color="default" />
          </div>
        ) : (
          <CustomTable columns={branchColumns} rows={branchRows} />
        )} */}
      </div>
      <div className="w-full h-[5%]">
        <CustomPagination
          page={page}
          rows={rows}
          totalData={totalBranches}
          totalpages={totalPages}
          handlePage={handlePage}
          handleRows={handleRows}
        />
      </div>
    </>
  );
}
