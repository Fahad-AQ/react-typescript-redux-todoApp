import * as React from 'react';
import {TodoItems} from '../../components';
import './TodoList.css';
export class TodoList extends React.Component<any, any> {

  constructor() {
        super();
      this.deleteTodoItem = this.deleteTodoItem.bind(this);
      this.editedTodoItem = this.editedTodoItem.bind(this);
      this.toggleTodoItem = this.toggleTodoItem.bind(this);
    }
    
   deleteTodoItem (id : number){
      this.props.deleteTodo(id);
   }
   
   editedTodoItem (id : number,updatedTodo :string){
      this.props.editedTodo(id,updatedTodo);
   }
    toggleTodoItem (id : number){
      this.props.toggleTodo(id);
   }



    render() {    
    var startedTodo : Array<object> = [];
    var compeletedTodo : Array<object> = [];
    this.props.todoObj.todoList.map((todo : any,index : number)=> {
      if(todo.completed == false){
         startedTodo.push(
                  
                  <TodoItems key={todo.id} 
                              todo={todo} 
                              index={todo.id}
                              deleteTodo={this.deleteTodoItem}
                              editedTodo={this.editedTodoItem}
                              toggleTodo={this.toggleTodoItem}
                    />
                );
      }
      else{
        compeletedTodo.push(
          
           <TodoItems key={todo.id} 
                              todo={todo} 
                              index={todo.id}
                              deleteTodo={this.deleteTodoItem}
                              editedTodo={this.editedTodoItem}
                              toggleTodo={this.toggleTodoItem}
                    />
        )
      }
     
    });
 
    if (!startedTodo.length && !compeletedTodo.length ) {
      return (
        <div>             
                <h2>Empty Todo</h2>
                      <TodoItems  key={-1} 
                              todo="No Items Added Yet" 
                              index={-1} 
                              deleteTodo={this.deleteTodoItem}
                              editedTodo={this.editedTodoItem}
                              toggleTodo={this.toggleTodoItem}
                                  />
          </div>
         
      );
    }
 
        return (
          <div>
                {
                  startedTodo.length != 0 &&
                  <div>  
                        <h2>Started TodoList</h2>           
                        {startedTodo}
                  </div>
                }
               {
                  compeletedTodo.length != 0 &&
                  <div>  
                        <h2>Compeleted TodoList</h2>           
                        {compeletedTodo}
                  </div>
                }
              
           </div>
        );
    }
}

export default TodoList;