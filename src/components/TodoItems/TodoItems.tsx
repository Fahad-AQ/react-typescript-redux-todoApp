import * as React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
export class TodoList extends React.Component<any, any> {

  constructor(props : any) {
        super(props);
        this.state = {
            doEdit : false,
            todo : props.todo.text,
            maxId : props.maxId
        };
        console.log(this.state.maxId)
    }
    
renderEmpltyTodo(){
    return (
                        
                        <List>
                                <ListItem primaryText='No Items Added Yet' rightIcon={<ActionInfo />} /> 
                                <Divider />
                        </List> 

       )
  }
    
  
  renderDisplayTodo(){
    return (
           <List>
                 <ListItem primaryText={this.state.todo} rightIcon={<ActionInfo />} /> 
                 <Divider />
            </List> 
       )
  }
    
  renderBasedOnCodition(){
    var item = null;
    if(this.state.maxId == 0){
    item = this.renderEmpltyTodo();;
    }
    else {
         item = this.renderDisplayTodo();;
    }
    return item;
  }

    render() {
        return (
            <div>
                  {this.renderBasedOnCodition()}
            </div>
        );
    }
}

export default TodoList;