import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import AddTodo from '../../component/addTodo/addTodo';
import TodoList from '../../component/todoList/todoList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class App extends React.Component<any, any> {
 
  constructor() {
        super();
    }

    render() {
        return (
           <MuiThemeProvider>
               <div>
                    <AppBar title="todoApp" />
                    <AddTodo  />
                    <TodoList  />
               </div>                                 
          </MuiThemeProvider>
        )
    }
}

export default App;