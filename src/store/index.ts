import { combineReducers, createStore} from 'redux';
import TodoReducer from './reducers/TodoReducer';
// Application State IAppState
interface IAppState {
    TodoReducer :any
}

const rootReducer = combineReducers<IAppState>({
    TodoReducer
});

export let store = createStore(rootReducer);

store.subscribe(() =>
  console.log(store.getState())
);



