
import { Metadata } from "next";
import { getPathnameHeader } from "./utils";
import { defaultMetadata, pagesMetadataList } from "./pages";

interface generateMetadataType extends Metadata {
  pathname?: string;
}

export const generateMetadata = (params?: generateMetadataType): Metadata => {
  const { pathname, ...meta } = { ...params, pathname: null };

  const matchedRouteWithPathname = (route: string) => route === (pathname ?? getPathnameHeader());

  const getPagesMetadata = pagesMetadataList.find((item) => matchedRouteWithPathname(item.route));

  const seoMetadata = {
    ...defaultMetadata,
    ...getPagesMetadata,
  };
  
  return {
    ...seoMetadata,
    ...meta,
    applicationName: "Pagina web enregla",
  };
};
