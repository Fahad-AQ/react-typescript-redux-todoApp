import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import {AddTodo, TodoList} from '../../components';
import { connect } from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoAction from '../../store/actions/TodoAction';


function mapStateToProps(state : any) {
    return {
        todoState: state.TodoReducer,
    };
}
function mapDispatchToProps(dispatch: any) {
      return {
        addTodo: (todoText : string) : void =>  dispatch(TodoAction.addTodo(todoText)),
    };
}



export class Main extends React.Component<any, any> {
 
  constructor() {
        super();
    }
    
 
 handleTouchTap(e : any) {
    console.log("touchTap", e);
  }
    render() {
        return (
           <MuiThemeProvider >
               <div >
                    <AppBar title="todoApp" />
                    <AddTodo addTodoEvent={this.props.addTodo} />
                    <TodoList todoObj={this.props.todoState.todo} />
               </div>                                 
          </MuiThemeProvider>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
