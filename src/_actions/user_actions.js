import axios from "axios";
import {
  TYPE
} from "./types";

export function getType(request) {
  return {
    type: TYPE,
    payload: request,
  };
}

