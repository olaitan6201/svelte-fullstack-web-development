let todos: Todo[] = []

export const api = (request : Request, param: any = null) => {

    switch (request.method.toUpperCase()) {
        case "GET":
            return todos.slice();
        
        case "POST":
            const item = {
                uid: `${Date.now()}`,
                text: param,
                created_at: new Date(),
                done: false
            }
            todos.push(item);
            return true

        case "DELETE" :
            todos = todos.filter(todo => todo.uid !== param)
            return true
        
        case "PATCH" :
            todos = todos.map((todo: Todo) => {
                if(todo.uid === param.uid) {
                    if(param.done) todo.done = !todo.done;
                    if(param.text) todo.text = param.text;
                }
                return todo;
            })
            return true    

        default:
            return false
    }
}