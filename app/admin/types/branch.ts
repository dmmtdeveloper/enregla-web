export type Branch = {
  id: number;
  agency: { id: number; name: string };
  location: string;
  address: string;
  telephone: string;
  labels: [];
  users: [];
};

export type BranchRows = {
  id: number;
  agency: string;
  location: string;
  address: string;
  telephone: string;
  labels: number;
  users: number;
};
