import { AxiosResponse } from "axios";
import jsonPlaceholder from "data/configs/jsonPlaceholder";
import { JSON_PLACEHOLDER_ENDPOINTS } from "data/constants";

export default {
  getListOfTodos: (): AxiosResponse =>
    jsonPlaceholder.get(JSON_PLACEHOLDER_ENDPOINTS.LIST_OF_TODOS),
};
