// import type { RequestHandler } from "@sveltejs/kit"

import { error, json, redirect } from "@sveltejs/kit";

let todos: Todo[] = [];

/** @type {import('./$types').RequestHandler} */
export const GET = () => {

    return json({
        status : 'success',
        message : "Hello from API",
        data: todos
    })
}

export const POST = async ({ request }: any) => {
    const req = await request.formData();
    const text = req.get('text');
    const item = {
        text,
        created_at: new Date(),
        done: false
    }
    todos.push(item);
    throw redirect(302, '/');
}