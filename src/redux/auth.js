//
// ─── INITIAL STATE ──────────────────────────────────────────────────────────────
//

const INITIAL_STATE = {
  isAuthenticated: false,
  token: "",
  errorMessage: "",
}

//
// ─── REDUCER  ────────────────────────────────────────────────────────────────────
//

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        counter: state.counter + 1,
      }
    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - 1,
      }

    default:
      return state
  }
}

//
// ─── ACTION  ────────────────────────────────────────────────────────────────────
//

export const ADD = () => {
  return {
    type: "ADD",
    //   payload: true
  }
}

export const SUBTRACT = () => {
  return {
    type: "SUBTRACT",
    //   payload: true
  }
}

export const OAUTHWITHGOOGLE = (data) => {
  return async (dispatch) => {
    console.log(data, "The data that we received in actions")
  }
}

export default counterReducer
