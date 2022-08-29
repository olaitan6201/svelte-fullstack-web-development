import PrismaClient from "$lib/prisma";

// let todos: Todo[] = []
const prisma = new PrismaClient()

export const api = async (request : Request, param: any = null) => {

    switch (request.method.toUpperCase()) {
        case "GET":
            return await prisma.todo.findMany()
        
        case "POST":
            const item = {
                text: param,
                created_at: new Date(),
                done: false
            }
            // todos.push(item);
            // return todos.slice()
            await prisma.todo.create({
                data: item
            })

            return await prisma.todo.findMany()

        case "DELETE" :
            // todos = todos.filter(todo => todo.uid !== param)
            await prisma.todo.delete({
                where: {
                    uid: param
                }
            })
            return await prisma.todo.findMany()
        
        case "PATCH" :
            // todos = todos.map((todo: Todo) => {
            //     if(todo.uid === param.uid) {
            //         if(param.done) todo.done = !todo.done;
            //         if(param.text) todo.text = param.text;
            //     }
            //     return todo;
            // })
            const status = param.done === 'done'
            if(param.done) await prisma.todo.update({
                where: { uid: param.uid },
                data: { done: !status }
            })
            if(param.text) await prisma.todo.update({
                where: { uid: param.uid },
                data: { text: param.text }
            })
            return await prisma.todo.findMany()    

        default:
            return false
    }
}