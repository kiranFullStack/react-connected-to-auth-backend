import React from "react"
import "./styles/main.scss"
import Header from "./components/Header"
import { ADD, SUBTRACT } from "./redux/counter"
import { useSelector, useDispatch } from "react-redux"

function App(props) {
  const counter = useSelector((state) => state.counter.counter)
  const dispatch = useDispatch()
  return (
    <>
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
    </>
  )
}

export default App
