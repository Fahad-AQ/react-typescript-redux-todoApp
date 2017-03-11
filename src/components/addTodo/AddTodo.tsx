import * as React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './AddTodo.css';


export class AddTodo extends React.Component<any, any> {
  
  constructor() {
        super();
        this.state = {
              todoDescription : ""
            }
        this.handlerInput = this.handlerInput.bind(this);   
        this.addTodo =this.addTodo.bind(this);
    }
  
    
    handlerInput(e: any) {    
         if(e.key == 'Enter'){        
             this.addTodo();            
         }
         else{
           this.setState({
                todoDescription : e.target.value
            });
         }
       
        
    }

    addTodo(){
      if(this.state.todoDescription){
      console.log(this.state.todoDescription);
      this.props.addTodoEvent(this.state.todoDescription);
      this.setState({
                  todoDescription: ""
              })
      }
     
    }
  
  
  
  render() {
    return (
            <div style={{
                        textAlign : 'center',
                        margin: '0 auto'}}>
                                    <TextField
                                      hintText="Type Todo"
                                      floatingLabelText="Todo"
                                      onChange={this.handlerInput}
                                      value={this.state.todoDescription}
                                      onKeyDown={this.handlerInput}
                                    />
                                    &nbsp;
                                    <RaisedButton label="Add Todo" primary={true} onClick={this.addTodo} disabled={this.state.todoDescription == ""} />
            </div>
    );
  }
}


export default AddTodo;