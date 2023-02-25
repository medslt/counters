import { useCallback, useReducer } from "react"
import Counter from "./Counter"
import { CounterType, ActionKind, ActionType } from "../types"
import { data } from "../data"
import style from "./App.module.css"

const counterReducer = (
  state: CounterType[],
  { type, payload }: ActionType
) => {
  // find the counter index that we need to update
  const counterIndex = state.findIndex(({ id }) => id === payload.id)
  const newState = [...state]
  const counterToUpdate = newState[counterIndex]

  switch (type) {
    case ActionKind.INCREAMENT:
      newState[counterIndex] = {
        ...counterToUpdate,
        value: counterToUpdate.value + 1
      }
      return newState

    case ActionKind.DECREMENT:
      // Accept negative value
      newState[counterIndex] = {
        ...counterToUpdate,
        value: counterToUpdate.value - 1
      }

      return newState

    default:
      return state
  }
}

const App = () => {
  const [counters, dispatch] = useReducer(counterReducer, data)

  const incrementCounter = useCallback((id: number) => {
    dispatch({ type: ActionKind.INCREAMENT, payload: { id } })
  }, [])

  const decrementCounter = useCallback((id: number) => {
    dispatch({ type: ActionKind.DECREMENT, payload: { id } })
  }, [])

  const total = counters.reduce((accu, counter) => accu + counter.value, 0)

  return (
    <div className={style.main}>
      <div className={style.head}>
        Counters Challenge
      </div>
      <div className={style.counters}>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            increment={incrementCounter}
            decrement={decrementCounter}
          />
        ))}
      </div>
      <div className={style.total}>Total count: {total}</div>
    </div>
  )
}

export default App
