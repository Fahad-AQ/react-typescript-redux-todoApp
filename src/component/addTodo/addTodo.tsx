import * as React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import './addTodo.css';


export class AddTodo extends React.Component<any, any> {
  constructor() {
        super();
         this.state = {
              dataSource: [],
              todoDescription : ""
              todoList : [];
            }
        this.addTodo = this.addTodo.bind(this);
    }

  addTodo(){
    this.state.todoList.push(;
  }

  handleUpdateInput = (value : string) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
      todoDescription : value
    });
  };
  
  render() {
    return (
            <div style={{
                        textAlign : 'center',
                        margin: '0 auto'}}>
                            <form>
                                    <AutoComplete
                                        hintText="Type Todo"
                                        dataSource={this.state.dataSource}
                                        onUpdateInput={this.handleUpdateInput}

                                        />
                                    <RaisedButton label="Add Todo" primary={true} onClick={this.addTodo}  />
                                        
                                </form>
            </div>
    );
  }
}

export default <AddTodo todos={this.state.todoList} />;