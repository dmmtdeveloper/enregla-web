import { endpoint } from "./endpoint";

export const GetAllBranches = async ({ token }: { token: string }) => {
  try {
    const options: RequestInit = {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    };
    const response = await fetch(`${endpoint}/branches`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al intentar obtener sucursales: ${error}`);
  }
};

export const GetBranches = async ({ token, query }: { token: string; query: string }) => {
  try {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`${endpoint}/branch/${query}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al intentar obtener sucursales: ${error}`);
  }
};

export const GetBranch = async ({ token, id }: { token: string; id: number }) => {
  try {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`${endpoint}/branch/${id}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al intentar obtener sucursal: ${error}`);
  }
};

export const CreateBranch = async ({ token }: { token: string }) => {
  try {
    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`${endpoint}/branch`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al intentar crear sucursal: ${error}`);
  }
};

export const UpdateBranch = async ({ token, id }: { token: string; id: number }) => {
  try {
    const options: RequestInit = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`${endpoint}/branch/${id}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al intentar actualizar sucursal: ${error}`);
  }
};

export const DeleteBranch = async ({ token, id }: { token: string; id: number }) => {
  try {
    const options: RequestInit = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`${endpoint}/branch/${id}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al intentar eliminar sucursal: ${error}`);
  }
};
