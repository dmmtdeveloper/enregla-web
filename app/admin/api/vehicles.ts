import { VehicleRows } from "../types/vehicle";
import { endpoint } from "./endpoint";

export const GetVehicles = async ({ token, query }: { token: string; query: string }) => {
  try {
    const options: RequestInit = {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    };
    const response = await fetch(`${endpoint}/vehicle${query}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al intentar obtener los vehículos: ${error}`);
  }
};

export const GetVehicleBrands = async ({ token }: { token: string }) => {
  try {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`${endpoint}/vehicle/brand`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al intentar obtener las marcas de vehículos: ${error}`);
  }
};

export const GetVehicleModels = async ({ token, brand_id }: { token: string; brand_id: number }) => {
  try {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`${endpoint}/vehicle/model?brand_id=${brand_id}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al intentar obtener los modelos de vehículos: ${error}`);
  }
};

export const SaveVehicle = async ({ token, vehicle }: { token: string; vehicle: VehicleRows }) => {
  try {
    const options: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ vehicle }),
    };
    const response = await fetch(`${endpoint}/vehicle`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al intentar guardar el vehículo: ${error}`);
  }
};

export const UpdateVehicle = async ({ token, vehicle }: { token: string; vehicle: VehicleRows }) => {
  try {
    const options: RequestInit = {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ vehicle }),
    };
    const response = await fetch(`${endpoint}/vehicle`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al intentar actualizar el vehículo: ${error}`);
  }
};

export const DeleteVehicle = async ({ token, id }: { token: string; id: number }) => {
  try {
    const options: RequestInit = {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    };
    const response = await fetch(`${endpoint}/vehicle/${id}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al intentar eliminar el vehículo: ${error}`);
  }
};
