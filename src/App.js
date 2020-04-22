import React from "react"
import "./styles/App.scss"
import Header from "./components/Header"
import { ADD, SUBTRACT } from "./redux/counterReducer"
import { useSelector, useDispatch } from "react-redux"

function App(props) {
  const counter = useSelector((state) => state.counterReducer.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <Header />
      <h1>{counter}</h1>
      <button
        onClick={() => {
          dispatch(ADD())
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(SUBTRACT())
        }}
      >
        -
      </button>
      {props.children}
    </div>
  )
}

export default App
