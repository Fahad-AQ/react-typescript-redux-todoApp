import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import {AddTodo, TodoList} from '../../components';
import { connect } from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoAction from '../../store/actions/TodoAction';
import './Main.css';

function mapStateToProps(state : any) {
    return {
        todoState: state.TodoReducer,
    };
}
function mapDispatchToProps(dispatch: any) {
      return {
        addTodo: (todoText : string) : void =>  dispatch(TodoAction.addTodo(todoText)),
        deleteTodo: (id : number ) : void =>  dispatch(TodoAction.deleteTodo(id)),
        editedTodo: (id : number , updateTodo : string) : void =>  dispatch(TodoAction.editedTodo(id,updateTodo)),
        toggleTodo: (id : number ) : void =>  dispatch(TodoAction.toggleTodo(id))
    };
}



export class Main extends React.Component<any, any> {
 
  constructor() {
        super();
    }
    
 
    render() {
        
        return (
           <MuiThemeProvider >
               <div >
                    <AppBar title="todoApp" />
                    <AddTodo addTodoEvent={this.props.addTodo} />
                    <TodoList todoObj={this.props.todoState.todo} deleteTodo={this.props.deleteTodo} editedTodo={this.props.editedTodo} toggleTodo={this.props.toggleTodo} />
               </div>                                 
          </MuiThemeProvider>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
