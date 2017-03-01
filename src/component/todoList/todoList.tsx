import * as React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import AddTodo from '../../component/addTodo/addTodo';
export class TodoList extends React.Component<any, any> {

  constructor() {
        super();
    }

    render() {
        return (
            <div>
                  
            
       {
            this.props.todoObj.todoList.filter(todo=> {
              return todo.completed === false;
            }).map((todo,index)=> {
              return  <List>
                        <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
                            <Divider />
                        </List>
            })
          }  
                
                 <Divider />
                <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
                 <Divider />
                <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
                 <Divider />
              
            </div>
        )
    }
}

export default TodoList;