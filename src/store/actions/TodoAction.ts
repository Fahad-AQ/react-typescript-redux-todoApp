export default class TodoAction {

    static ADD_TODO       : any = "ADD_TODO";
    static DELETE_TODO    : any = "DELETE_TODO";
    static EDITED_TODO    : any = "EDITED_TODO";
    static TOGGLE_TODO    : any = "TOGGLE_TODO";

    static addTodo(todoItemDescription : string) {
        return { 
            type: TodoAction.ADD_TODO,
            payload : {
                text: todoItemDescription,
                completed : false
            }
           
        }
    }
    static deleteTodo(id : number) {
        return { 
            type: TodoAction.DELETE_TODO,
            payload : {
                 id : id
            }
           
        }
    }
   static editedTodo(id : number,updateTodo : string) {
        return { 
            type: TodoAction.EDITED_TODO,
            payload : {
                 id : id,
                 updatetext : updateTodo
            }
           
        }
    }
    
   static toggleTodo(id : number) {
        return { 
            type: TodoAction.TOGGLE_TODO,
            payload : {
                 id : id
            }
           
        }
    }

 
}