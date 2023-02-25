import { memo } from "react"
import { CounterType } from "../types"
import style from "./Counter.module.css"

type CounerPropsType = {
  counter: CounterType
  increment: (id: number) => void
  decrement: (id: number) => void
}

const Counter = memo(({ counter, increment, decrement }: CounerPropsType) => (
  <div data-testid="counter-element" className={style.container} >
    <b>{counter.value}</b>
    <div  className={style.actions}>
      <button
        onClick={() => {
          increment(counter.id)
        }}
        className={`${style.btn} ${style.increment}`}
      >
        ＋
      </button>
      <button
        onClick={() => {
          decrement(counter.id)
        }}
        className={`${style.btn} ${style.decrement}`}
      >
        －
      </button>
    </div>
  </div>
))

export default Counter
