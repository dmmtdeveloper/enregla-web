import { HomeIcon } from "@/assets/icons/home";
import { UsersIcon } from "@/assets/icons/users";
import { LabelIcon } from "@/assets/icons/label";
import { BuildingIcon } from "@/assets/icons/building";
import { WheelIcon } from "@/assets/icons/wheel";

export const navigationMenu = [
  { name: "Inicio", path: "/admin/dashboard", icon: <HomeIcon color="#fff" /> },
  {
    name: "Operadores",
    path: "/admin/operators",
    icon: <UsersIcon color="#fff" />,
  },
  {
    name: "Insumos",
    path: "/admin/supplies",
    icon: <LabelIcon color="#fff" />,
  },
  {
    name: "Sucursales",
    path: "/admin/branches",
    icon: <BuildingIcon color="#fff" />,
  },
  {
    name: "Vehículos",
    path: "/admin/vehicles",
    icon: <WheelIcon color="#fff" />,
  },
];
