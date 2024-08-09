export type Brand = {
  id: number;
  brand: string;
  logo: string;
};

export type Model = {
  id: number;
  model: string;
  brand_id: number;
};

export type Vehicle = {
  id: number;
  brand: string;
  logo: string;
  model: Model[];
};

export type VehicleRows = {
  id: number;
  brand: string;
  logo: string;
  model: string;
};
