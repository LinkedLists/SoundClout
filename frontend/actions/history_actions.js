export const RECEIVE_HISTORY = "RECEIVE_HISTORY"
export const CLEAR_HISTORY = "CLEAR_HISTORY"

export const receiveHistory = (history) => {
  return {
    type: RECEIVE_HISTORY,
    history
  }
}

export const clearHistory = () => {
  return{
    type: CLEAR_HISTORY
  }
}