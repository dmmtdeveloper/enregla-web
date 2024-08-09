import { endpoint } from "./endpoint";

export const GetVehicleBrands = async ({ token, query }: { token: string; query: string }) => {
  try {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`${endpoint}/vehicle/brand${query}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al intentar obtener las marcas de vehículos: ${error}`);
  }
};

export const GetVehicleModels = async ({ token, query }: { token: string; query: string }) => {
  try {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`${endpoint}/vehicle/model${query}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al intentar obtener los modelos de vehículos: ${error}`);
  }
};

export const SaveVehicleBrand = async ({ token, brand, logo }: { token: string; brand: string; logo: string }) => {
  try {
    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ brand, logo }),
    };
    const response = await fetch(`${endpoint}/vehicle/brand`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al intentar guardar la marca de vehículo: ${error}`);
  }
};

export const SaveVehicleModel = async ({
  token,
  brand_id,
  model,
}: {
  token: string;
  brand_id: number;
  model: string;
}) => {
  try {
    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ brand_id, model }),
    };
    const response = await fetch(`${endpoint}/vehicle/model`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al intentar guardar el modelo de vehículo: ${error}`);
  }
};

export const UpdateVehicleBrand = async ({
  token,
  brand_id,
  brand,
  logo,
}: {
  token: string;
  brand_id: number;
  brand: string;
  logo: string;
}) => {
  try {
    const options: RequestInit = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ brand, logo }),
    };
    const response = await fetch(`${endpoint}/vehicle/brand/${brand_id}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al intentar actualizar la marca de vehículo: ${error}`);
  }
};

export const UpdateVehicleModel = async ({
  token,
  model_id,
  brand_id,
  model,
}: {
  token: string;
  model_id: number;
  brand_id: number;
  model: string;
}) => {
  try {
    const options: RequestInit = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ brand_id, model }),
    };
    const response = await fetch(`${endpoint}/vehicle/model/${model_id}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al intentar actualizar el modelo de vehículo: ${error}`);
  }
};

export const DeleteVehicleBrand = async ({ token, brand_id }: { token: string; brand_id: number }) => {
  try {
    const options: RequestInit = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`${endpoint}/vehicle/brand/${brand_id}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al intentar eliminar la marca de vehículo: ${error}`);
  }
};

export const DeleteVehicleModel = async ({ token, model_id }: { token: string; model_id: number }) => {
  try {
    const options: RequestInit = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`${endpoint}/vehicle/model/${model_id}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al intentar eliminar el modelo de vehículo: ${error}`);
  }
};
