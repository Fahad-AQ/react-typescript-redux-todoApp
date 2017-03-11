import * as React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import {grey400} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import './TodoItems.css';
export class TodoList extends React.Component<any, any> {

  constructor(props : any) {
        super(props);
        this.state = {
            doEdit : false,
            todo : props.todo.text,
            maxId : props.maxId,
            
        };
       this.deleteTodo = this.deleteTodo.bind(this);
       this.editTodo = this.editTodo.bind(this);
       this.editedTodo = this.editedTodo.bind(this);
       this.handlerInput = this.handlerInput.bind(this);
       this.toggleTodo = this.toggleTodo.bind(this);
    }
    
   handlerInput(e: any) {    
         if(e.key == 'Enter'){
                this.editedTodo();
         }
         else{
           this.setState({
                todo : e.target.value
            });
         }
       
        
    }  
    
  editTodo(){
       this.setState({
                  doEdit: !this.state.doEdit,
              })
  }

  editedTodo(){
       if(this.state.todo){
               this.props.editedTodo(this.props.todo.id,this.state.todo);
               this.setState({
                            doEdit: false,
                        })   
             }   
  }
  
   toggleTodo(e : any){
    console.log(e.target.value);
    console.log(e.target.checked);
            this.props.toggleTodo(this.props.todo.id);
    
  }
  
  
  deleteTodo(){
    this.props.deleteTodo(this.props.todo.id);
  }
  
 
    
renderEmpltyTodo(){
    return (
                        
        <List>
                <ListItem primaryText='No Items Added Yet'   rightIcon={<ActionInfo />} /> 
                <Divider />
            </List> 

            )
}
    
  
renderDisplayTodo(){
    return (
         
        <List>
                <ListItem primaryText={this.state.todo}  leftCheckbox={<Checkbox  onCheck={this.toggleTodo } checked={this.props.todo.completed} />}  rightIconButton={
                                <IconMenu iconButtonElement={
                                    <IconButton
                                            touch={true}
                                            tooltip="more"
                                            tooltipPosition="bottom-left"    
                                        >
                                            <MoreVertIcon color={grey400} />
                                        </IconButton>
                                }>
                                    {this.props.todo.completed ? <MenuItem onClick={this.deleteTodo}>Delete</MenuItem> : <div><MenuItem onClick={this.toggleTodo}>Completed</MenuItem><MenuItem onClick={this.editTodo}>Edit</MenuItem></div>}               
                                </IconMenu>                              
                    } /> 
                <Divider />
        </List> 
           
        )
  }
  
  renderEditedTodo(){
      
    const editedTodoStyle = {
        width: "90%",
        paddingLeft : "25px"
        };

    return (
              <div >
                    <TextField        
                            value={this.state.todo}
                            hintText="Edit Todo"
                            floatingLabelText="Edit Todo"
                            onChange={this.handlerInput}
                            onKeyDown={this.handlerInput}
                            fullWidth={true}
                            style={editedTodoStyle}
                            
                        />
                        <RaisedButton 
                        label="Edited" 
                        primary={true} 
                        disabled={this.state.todo == ""}
                        onClick={this.editedTodo} 
                        /> 
              </div>
                 
        )
  }
    
  renderBasedOnCodition(){
      
    var item = null;
    if(this.props.todo == "No Items Added Yet"){
    item = this.renderEmpltyTodo();;
    }
    else if(this.state.doEdit == true){
    item = this.renderEditedTodo();;
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