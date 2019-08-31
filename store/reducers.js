import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { actionTypes } from './actions'

const InitialState = {
  tvShows: []
}

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return Object.assign({}, state, {
        tvShows: [...action.body]
      })
    case actionTypes.RESET:
      return Object.assign({}, state, {
        tvShows: InitialState.tvShows
      })
    default:
      return state
  }
}


export function initializeStore (initialState = InitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
