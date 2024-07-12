import { HomeIcon } from "@/assets/icons/home";
import { UsersIcon } from "@/assets/icons/users";
import { LabelIcon } from "@/assets/icons/label";

export const navigationMenu = [
  { name: "Inicio", path: "/home", icon: <HomeIcon color="#fff" /> },
  { name: "Operadores", path: "/operators", icon: <UsersIcon color="#fff" /> },
  { name: "Insumos", path: "/supplies", icon: <LabelIcon color="#fff" /> },
];
