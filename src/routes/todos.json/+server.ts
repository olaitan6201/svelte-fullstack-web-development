// import type { RequestHandler } from "@sveltejs/kit"

import { error, json, redirect } from "@sveltejs/kit";
import { api } from "../api";


/** @type {import('./$types').RequestHandler} */
export const GET = ({ request }:any) => {
    let todos = api(request) ?? []
    return json({
        status : 'success',
        message : "Success",
        data: todos
    })
}

export const POST = async ({ request }: any) => {
    const req = await request.formData();
    const text = req.get('text');
    // const res = api(request, text)
    // if(res) throw redirect(302, '/');
    // else throw error(405);
    const res = api(request, text)
    if(typeof res !== 'boolean') return json({
        status : 'success',
        message : "Success",
        data:  res
    })

    return json({
        status : 'error',
        message : "Unable to submit!"
    })
}