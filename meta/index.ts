import { Metadata } from "next";
import { getPathnameHeader } from "./utils";
import { defaultMetadata, pagesMetadataList } from "@/meta/page";

interface GenerateMetadataType extends Metadata {
  pathname?: string;
}

export const generateMetadata = (params?: GenerateMetadataType): Metadata => {
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
    applicationName: "App tutorial",
  };
};
