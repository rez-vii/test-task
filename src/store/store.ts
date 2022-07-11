import { combineReducers } from "redux"
import main from "./reducer"

const reducers = combineReducers({
  main
})

export type RootState = ReturnType<typeof reducers>

export default reducers
