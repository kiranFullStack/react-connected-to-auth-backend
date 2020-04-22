//
// ─── INITIAL STATE ──────────────────────────────────────────────────────────────
//

const INITIAL_STATE = {
  counter: 0,
}

//
// ─── REDUCER  ────────────────────────────────────────────────────────────────────
//

const counter = (state = INITIAL_STATE, action) => {
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

export default counter
