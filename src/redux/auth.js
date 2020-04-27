import axios from "axios"

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

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case "ADD":
    //   return {
    //     ...state,
    //     counter: state.counter + 1,
    //   }
    // case "SUBTRACT":
    //   return {
    //     ...state,
    //     counter: state.counter - 1,
    //   }

    default:
      return state
  }
}

export const OAUTHWITHGOOGLE = (data) => {
  return async (dispatch) => {
    console.log(data, "The data that we received in actions")
    const response = await axios.post(
      "http://localhost:5000/users/oauth/google",
      {
        access_token: data,
      }
    )
    console.log(response, "response from google server")
  }
}

export const OAUTHWITHFACEBOOK = (data) => {
  return async (dispatch) => {
    console.log(data, "The data that we received in actions")
    const response = await axios.post(
      "http://localhost:5000/users/oauth/facebook",
      {
        access_token: data,
      }
    )
    console.log(response, "response from facebook server")
  }
}

export default auth
