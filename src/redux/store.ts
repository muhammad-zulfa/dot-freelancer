import {combineReducers, applyMiddleware, createStore, compose} from 'redux'
import {AppReducer} from "./app/reducer";
import thunk from "redux-thunk";
import {createWrapper} from "next-redux-wrapper";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const rootReducer = combineReducers({
  app: AppReducer
})

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(() => {}) : compose;

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return compose(applyMiddleware(...middleware));
}

const createDefStore = (emptyState = {}) => {
  return createStore(
    rootReducer,
    emptyState,
    bindMiddleware([thunk]),
  )
}

export const initStore = () => {
  let state = {};

  return createDefStore({
    ...state,
  });
}

export const wrapper = createWrapper(initStore)
