import {
  TYPE
} from "../_actions/types";
//import { connect } from 'react-redux'

export default function (state = {}, action) {
  return{ ...state, type: action.payload }
}
