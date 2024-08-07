import { endpoint } from "./endpoint";

type UserForm = {
  id: number;
  token: string;
  name: string;
  rut: string;
  email: string;
  branch_id: number;
  role_id: number;
};

export const LoginUser = async ({ rut, password }: { rut: string; password: string }) => {
  try {
    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rut, password }),
    };
    const response = await fetch(`${endpoint}/auth`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al intentar iniciar sesión: ${error}`);
  }
};

export const GetUsers = async ({ token, query }: { token: string; query: string }) => {
  console.log(token);

  try {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`${endpoint}/user${query}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al obtener los usuarios: ${error}`);
  }
};

export const GetUser = async ({ token, id }: { token: string; id: string }) => {
  try {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`${endpoint}/user/${id}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al obtener el usuario: ${error}`);
  }
};

export const CreateUser = async ({ token, name, rut, email, branch_id, role_id }: Omit<UserForm, "id">) => {
  try {
    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, rut, email, branch_id, role_id }),
    };
    const response = await fetch(`${endpoint}/user`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al crear el usuario: ${error}`);
  }
};

export const EditUser = async ({ token, id, name, rut, email, branch_id, role_id }: UserForm) => {
  try {
    const options: RequestInit = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, rut, email, branch_id, role_id }),
    };
    const response = await fetch(`${endpoint}/user/${id}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al editar el usuario: ${error}`);
  }
};

export const DeleteUser = async ({ token, id }: { token: string; id: number }) => {
  try {
    const options: RequestInit = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`${endpoint}/user/${id}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al eliminar el usuario: ${error}`);
  }
};
