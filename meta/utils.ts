import { headers } from "next/headers";

export const getPathnameHeader = () => {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "";
  return pathname;
};
