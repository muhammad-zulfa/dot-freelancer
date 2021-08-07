import {http} from "../http";
import {makeUseAxios} from "axios-hooks";

export const useHttp = makeUseAxios({
  axios: http
})
