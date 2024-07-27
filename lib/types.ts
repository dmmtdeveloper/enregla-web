// import { links} from "./data";

// export type SectionName = (typeof links)[number]["name"];

export type LinkItem = {
  name: string;
  hash: string;
};

export type NavItems = {
  home: LinkItem[];
  products: LinkItem[];
};
