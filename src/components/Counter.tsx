import { memo } from "react"
import { CounterType } from "../types"
import style from "./Counter.module.css"

type CounerPropsType = {
  counter: CounterType
  increment: (id: number) => void
  decrement: (id: number) => void
}

const Counter = memo(({ counter, increment, decrement }: CounerPropsType) => (
  <div data-testid="counter-element" className={style.grid} >
    <b>{counter.value}</b>
    <div>
      <button
        onClick={() => {
          increment(counter.id)
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          decrement(counter.id)
        }}
      >
        -
      </button>
    </div>
  </div>
))

export default Counter
