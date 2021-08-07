import useSWR from "swr"
import {fetcher} from "../fetch";

export const useFetchCart = (url: string) => useSWR(url, fetcher)
