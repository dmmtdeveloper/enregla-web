import { Spinner } from "@nextui-org/spinner";
import CustomTable from "../ui/table";
import CustomPagination from "../ui/pagination";

type ColumnProps = {
  key: string;
  label: string;
};

type SuppliesModule = {
  loadingUsers: boolean;
  usersColumns: ColumnProps[];
  userRows: [];
  handleEdit?: (id: number) => void;
  handleDelete?: (id: number) => void;
  usersPage: number;
  usersRows: number;
  totalUsers: number;
  totalUsersPages: number;
  handleUsersPage: (page: number) => void;
  handleUsersRows: (rows: number) => void;
};

export default function SuppliesModule({
  loadingUsers,
  usersColumns,
  userRows,
  usersPage,
  usersRows,
  totalUsers,
  totalUsersPages,
  handleUsersPage,
  handleUsersRows,
  handleDelete,
  handleEdit,
}: SuppliesModule) {
  return (
    <>
      <div className="w-full h-[70%]">
        {loadingUsers ? (
          <div className="w-full h-full flex items-center justify-center">
            <Spinner size="md" color="default" />
          </div>
        ) : (
          <CustomTable columns={usersColumns} rows={userRows} />
        )}
      </div>
      <div className="w-full h-[5%]">
        <CustomPagination
          page={usersPage}
          rows={usersRows}
          totalData={totalUsers}
          totalpages={totalUsersPages}
          handlePage={handleUsersPage}
          handleRows={handleUsersRows}
        />
      </div>
    </>
  );
}
