import { Spinner } from "@nextui-org/spinner";
import CustomTable from "../ui/table";
import CustomPagination from "../ui/pagination";
import useUsers from "../hooks/useUsers";
import Header from "../ui/header";
import CustomButton from "../ui/button";
import CustomModal from "../ui/modal";
import UserForm from "../ui/forms/userform";

export default function UsersModule() {
  const {
    usersColumns,
    userRows,
    handleUsersPage,
    handleUsersRows,
    totalUsersPages,
    totalUsers,
    usersPage,
    usersRows,
    loadingUsers,
    handleSearchUser,
    searchedUser,
    filteredUsers,
    showModal,
    openModal,
    closeModal,
    branches,
    user,
    handleUser,
    userRoles,
    saveUser,
    selectUser,
    deleteUser,
    confirmDelete,
    closeConfirmModal,
    edit,
  } = useUsers();
  return (
    <>
      <Header
        title="Usuarios"
        fromDate={new Date().toISOString().slice(0, 10)}
        toDate={new Date().toISOString().slice(0, 10)}
        searchedText={searchedUser}
        searchText={handleSearchUser}
      />
      <div className="w-full h-[10%] flex items-center justify-end mb-[1%]">
        <CustomButton text="Nuevo" onClick={openModal} />
      </div>
      <div className="w-full h-[70%]">
        {loadingUsers ? (
          <div className="w-full h-full flex items-center justify-center">
            <Spinner size="md" color="default" />
          </div>
        ) : (
          <CustomTable
            columns={usersColumns}
            rows={searchedUser !== "" ? filteredUsers : userRows}
            handleEdit={selectUser}
            handleDelete={deleteUser}
          />
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
      {showModal && (
        <CustomModal
          isOpen={showModal}
          onClose={closeModal}
          title={edit ? "Editar usuario" : "Nuevo usuario"}
          save={saveUser}
        >
          <UserForm branches={branches} user={user} handleUser={handleUser} roles={userRoles} />
        </CustomModal>
      )}
    </>
  );
}
