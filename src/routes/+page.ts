/** @type {import('./$types').PageLoad} */
export const load = async ({fetch}:any) => {
    let body: Todo[] = []
    try {
        let res = await fetch('/todos.json');
        
        if(res.ok){
            res = await res.json();
            body = res.data
        }
        
    } catch (error) {
    }finally{
        return { body }
    }
}