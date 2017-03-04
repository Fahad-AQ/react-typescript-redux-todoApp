export default class TodoAction {

    static ADD_TODO    : any = "ADD_TODO";

    static addTodo(todoItemDescription : string) {
        return { 
            type: TodoAction.ADD_TODO,
            payload : {
                text: todoItemDescription,
                completed : false
            }
           
        }
    }

 
}