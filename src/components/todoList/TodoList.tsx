import * as React from 'react';
import {TodoItems} from '../../components';

export class TodoList extends React.Component<any, any> {

  constructor() {
        super();
        console.log(this.props)
    }
   

    render() {
        return (
          
               <div>
                        { 
                                         this.props.todoObj.todoList.length != 0  &&   this.props.todoObj.todoList.filter((todo : any)=> {
                                                    return todo.completed === false;
                                                  }).map((todo : any,index : number)=> {
                                                    return <TodoItems key={todo.id} 
                                                              todo={todo} 
                                                              index={todo.id}
                                                              maxId={this.props.todoObj.maxId}
                                                              />
                                                  })
                                                  
                                                  
                                                  
                       }
                      { 
                                         this.props.todoObj.todoList.length == 0  && 
                                                            <TodoItems
                                                              todo="" 
                                                              key=""
                                                              index=""
                                                              maxId={this.props.todoObj.maxId}
                                                              />
                                                                      
                                                  
                       }
                       
               </div>
        );
    }
}

export default TodoList;