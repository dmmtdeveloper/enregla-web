import { Spinner } from "@nextui-org/spinner";
import CustomTable from "../ui/table";
import CustomPagination from "../ui/pagination";
import Header from "../ui/header";

export default function DashboardModule() {
  return (
    <>
      <Header
        title="Resumen"
        fromDate={new Date().toISOString().slice(0, 10)}
        toDate={new Date().toISOString().slice(0, 10)}
        searchedText={""}
        searchText={() => {}}
      />
      <div className="w-full h-[70%]">
        {/* {loadingUsers ? (
          <div className="w-full h-full flex items-center justify-center">
            <Spinner size="md" color="default" />
          </div>
        ) : (
          <CustomTable columns={usersColumns} rows={userRows} />
        )} */}
      </div>
      <div className="w-full h-[5%]">
        {/* <CustomPagination
          page={usersPage}
          rows={usersRows}
          totalData={totalUsers}
          totalpages={totalUsersPages}
          handlePage={handleUsersPage}
          handleRows={handleUsersRows}
        /> */}
      </div>
    </>
  );
}
