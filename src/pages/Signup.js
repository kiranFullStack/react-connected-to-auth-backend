import React from "react"
import GoogleLogin from "react-google-login"
import FacebookLogin from "react-facebook-login"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

import { OAUTHWITHGOOGLE, OAUTHWITHFACEBOOK } from "../redux/auth"

export default function Signup(props) {
  let history = useHistory()

  const errorMessage = useSelector((state) => state.auth.errorMessage)

  const dispatch = useDispatch()

  const responseFacebook = (response) => {
    console.log(response, "Response Facebook")
    dispatch(OAUTHWITHFACEBOOK(response.accessToken))
    if (!errorMessage) {
      history.push("/dashboard")
    }
  }

  const responseGoogle = (response) => {
    console.log(response, "Response Google")
    dispatch(OAUTHWITHGOOGLE(response.accessToken))
    if (!errorMessage) {
      history.push("/dashboard")
    }
  }

  console.log(errorMessage, "error message")

  return (
    <>
      <h1>Signup with</h1>

      <GoogleLogin
        clientId="482558215006-qujkj6ah8psjobfmq7dffmgpq4kdpc3e.apps.googleusercontent.com"
        buttonText="Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        // cookiePolicy={"single_host_origin"}
        // className=""
      />
      <FacebookLogin
        appId="1781631228735689"
        fields="name,email,picture"
        callback={responseFacebook}
        textButton="Facebook"
        // cssClass=""
      />
    </>
  )
}
