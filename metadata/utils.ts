import { headers } from "next/headers";

// Función para obtener el pathname desde los headers
export const getPathnameHeader = (): string => {
  const pathname = headers().get("x-invoke-path") || "/#";
  return pathname;
};
