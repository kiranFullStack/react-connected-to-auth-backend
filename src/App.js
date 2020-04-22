import React from "react"
import "./App.css"
import Header from "./components/Header"

function App(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

export default App
