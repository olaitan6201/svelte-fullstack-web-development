import { error, json, redirect } from "@sveltejs/kit"
import { api } from "../../api"

/** @type {import('./$types').RequestHandler} */
export const DELETE = async ({ url, params, request }: any) => {
    const uid = params.uid
    
    // if(deleted) throw redirect(302, '/')
    // throw error(405);
    const deleted = await api(request, uid)
    if(typeof deleted !== 'boolean') return json({
        status : 'success',
        message : "Success",
        data:   deleted
    })
    
    return json({
        status : 'error',
        message : "Unable to delete!"
    })
}

export const PATCH = async ({ url, params, request }: any) => {
    const req = await request.formData();
    const uid = params.uid
    let data = null
    if(req.get('text')) data = {text: req.get('text'), uid: uid};
    else if(req.get('done')) data = {done: req.get('done'), uid: uid};

    if(!data) throw error(404)
    
    // if(updated) throw redirect(302, '/')
    // throw error(405);
    const updated = await api(request, data)
    if(typeof updated !== 'boolean') return json({
        status : 'success',
        message : "Success",
        data:   updated
    })
    
    return json({
        status : 'error',
        message : "Unable to update!"
    })
}