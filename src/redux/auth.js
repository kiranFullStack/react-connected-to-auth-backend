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
    case "AUTH_SIGN_UP":
      return { ...state, isAuthenticated: true, errorMessage: "" }

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
    dispatch({
      type: "AUTH_SIGN_UP",
      payload: response.config.data,
    })
    //LOCAL STORAGE NEEDS REFACTORING

    localStorage.setItem("JWT_TOKEN", response.config.data.access_token)
    console.log(
      JSON.parse(response.config.data).access_token,
      "response from google server"
    )
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
    dispatch({
      type: "AUTH_SIGN_UP",
      payload: response.config.data,
    })
    //LOCAL STORAGE NEEDS REFACTORING
    localStorage.setItem("JWT_TOKEN", response.config.data.access_token)

    console.log(
      JSON.parse(response.config.data).access_token,
      "response from facebook server access token"
    )
  }
}

export default auth
