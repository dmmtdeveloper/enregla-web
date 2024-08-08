export type Branch = {
  id: number;
  agency: { id: number; name: string };
  location: string;
  address: string;
  city: string;
  phone: string;
};

export type BranchRows = {
  id: number;
  agency: string;
  location: string;
  address: string;
  city: string;
  phone: string;
};
