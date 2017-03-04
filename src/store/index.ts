import { createStore } from 'redux'
import { combineReducers } from 'redux';

interface IAppState {
    TodoReducer : any
}

import TodoReducer from './reducers/TodoReducer';

export const rootReducer = combineReducers<IAppState>({
    TodoReducer
// more reducers go here
})

let store = createStore(rootReducer)

store.subscribe(() =>
  console.log(store.getState())
);

export default store;