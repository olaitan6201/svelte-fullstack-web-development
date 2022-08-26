export const enhance = (form: HTMLFormElement, {result}:any) => {
    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        try {
            const body = new FormData(form)
            const res = await fetch(form.action, {
                method: form.method,
                headers: {
                    accept: 'application/json'
                },
                body
            })

            if(res.ok) result(res);
            else console.error(`Fetch error: ${await res.text()}`);
            
        } catch (error) {
            
        }
    }

    form.addEventListener('submit', handleSubmit);

    return {
        destroy(){
            form.removeEventListener('submit', handleSubmit)
        }
    }
}