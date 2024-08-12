import { endpoint } from "../api/endpoint";
import useSWR from "swr";

const { data, error } = useSWR(`${endpoint}/user`, (url) => fetch(url).then((res) => res.json()));
