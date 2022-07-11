import { WORKERS } from "../utils/constants"
import * as actionTypes from "./actionTypes"
import {MainAction, MainState} from "../utils/types";

const initialState: MainState = {
  workers: WORKERS,
  selectedWorker: null,
  totalCount: 0,
}

const reducer = (
  state: MainState = initialState,
  action: MainAction
): MainState => {
  switch (action.type) {
    case actionTypes.SET_WORKERS:
      return {
        ...state,
        workers: action.payload
      }
    case actionTypes.SET_SELECTED_WORKER:
      return {
        ...state,
        selectedWorker: action.payload
      }
    case actionTypes.SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload
      }
  }
  return state
}

export default reducer
