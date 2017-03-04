import TodoAction from '../actions/TodoAction'
interface IState {
    todo: {
      todoList : Array<object>
      maxId : number
    },

}




const INITIAL_STATE = {
    todo : {
      todoList  : [
      
      ],
     maxId : 0
    },

}

interface IAction {
    type: string,
    payload?: any
}

function TodoReducer(state : IState = INITIAL_STATE, action: IAction) {
  switch (action.type) {
  case TodoAction.ADD_TODO:
    var newState = Object.assign({}, state );
    newState.todo.maxId += 1;
    newState.todo.todoList.push({...action.payload,id:newState.todo.maxId});
    return newState;
 
  default:
    return state
  }
}

export default TodoReducer;