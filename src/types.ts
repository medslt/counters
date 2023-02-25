export enum ActionKind {
    INCREAMENT,
    DECREMENT
  }

export type CounterType = {id: number, value: number}

export type PayloadType = {id: number}

export type ActionType =  
|{type: ActionKind.DECREMENT, payload: PayloadType} 
|{type: ActionKind.INCREAMENT, payload: PayloadType}

