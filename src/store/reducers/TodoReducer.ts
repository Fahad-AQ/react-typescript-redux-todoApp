import TodoAction from '../actions/TodoAction'
interface IState {
    todo:{
       todoList : Array<object>
    },
    maxId : number
}

const INITIAL_STATE = {
    "todo" : {
      "todoList"  : []
    },
    maxId : 0
}

interface IAction {
    type: string,
    payload?: any
}

function TodoReducer(state : IState = INITIAL_STATE, action: IAction) {
   switch (action.type) {
   case TodoAction.ADD_TODO: 
    const newState : IState = Object.assign({}, state );
        newState.maxId += 1;
        newState.todo.todoList.push({...action.payload , id : newState.maxId});
    return newState;
    
   case TodoAction.DELETE_TODO:
   const newState2 : IState  = Object.assign({}, state );
   const indexItem : number= state.todo.todoList.findIndex((todo :any)=> {
      return todo.id === action.payload.id;
    })  
    newState2.todo.todoList.splice(indexItem,1);
    return newState2;
    
  case TodoAction.EDITED_TODO:
   const items = state.todo.todoList.map((todo :any)=> {
      return todo.id === action.payload.id ?{...todo, text:action.payload.updatetext}: todo;
    })  
    return Object.assign({}, state ,{ todo : {
       todoList :items
    }});
    
    case TodoAction.TOGGLE_TODO:
    const items2 = state.todo.todoList.map((todo :any)=> {
      return todo.id === action.payload.id ?{...todo, completed: !todo.completed}: todo;
    })  
    return Object.assign({}, state ,{ todo : {
       todoList :items2
    }});


  default:
    return state
  }
}

export default TodoReducer;