import * as React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './addTodo.css';


export class AddTodo extends React.Component<any, any> {
  constructor() {
        super();
        this.state = {
              todoDescription : ""
            }
        this.addTodo =this.addTodo.bind(this);
    }

  addTodo(){
      console.log(this.state.todoDescription)
  }

  handleUpdateInput(event : any){
    this.setState({
     todoDescription: event.target.value
    });
  };
  
  render() {
    return (
            <div style={{
                        textAlign : 'center',
                        margin: '0 auto'}}>
                                    <TextField
                                      hintText="Hint Text"
                                      floatingLabelText="Floating Label Text"
                                      onChange={this.handleUpdateInput.bind(this)}
                                    />
                                    <RaisedButton label="Add Todo" primary={true} onClick={this.addTodo}  />
            </div>
    );
  }
}

export default AddTodo;