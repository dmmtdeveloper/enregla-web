import { Spinner } from "@nextui-org/spinner";
import CustomTable from "../ui/table";
import CustomPagination from "../ui/pagination";
import { UserRows } from "../types/user";

type ColumnProps = {
  key: string;
  label: string;
};

type UsersModule = {
  loadingUsers: boolean;
  usersColumns: ColumnProps[];
  userRows: UserRows[];
  handleEdit?: (id: number) => void;
  handleDelete?: (id: number) => void;
  usersPage: number;
  usersRows: number;
  totalUsers: number;
  totalUsersPages: number;
  handleUsersPage: (page: number) => void;
  handleUsersRows: (rows: number) => void;
};

export default function UsersModule({
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
}: UsersModule) {
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
