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

        default:
            return false
    }
}