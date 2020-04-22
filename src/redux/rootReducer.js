import { combineReducers } from "redux"
import counterReducer from "./counterReducer"

//
// ─── COMBINE REDUCERS ───────────────────────────────────────────────────────────
//

const rootReducer = combineReducers({
  counterReducer: counterReducer,
})

export default rootReducer
