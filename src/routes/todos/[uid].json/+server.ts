import { error, json, redirect } from "@sveltejs/kit"
import { api } from "../../api"

/** @type {import('./$types').RequestHandler} */
export const DELETE = ({ url, params, request }: any) => {
    const uid = params.uid
    const deleted = api(request, uid)
    
    if(deleted) throw redirect(302, '/')

    throw error(405);
}

export const PATCH = async ({ url, params, request }: any) => {
    const req = await request.formData();
    const uid = params.uid
    let data = null
    if(req.get('text')) data = {text: req.get('text'), uid: uid};
    else if(req.get('done')) data = {done: req.get('done'), uid: uid};

    if(!data) throw error(404)
    
    const updated = api(request, data)
    
    if(updated) throw redirect(302, '/')

    throw error(405);
}