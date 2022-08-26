<script lang="ts">
    // @ts-ignore
    import TodoItem from "$lib/todo-item.svelte"
    /** @type {import('./$types').PageData}*/
    export let data: any;
    let todos: Todo[] = data.body
    const title = "Todos"
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="todos">
    <h1>{title}</h1>
    
    <form action="/todos.json" method="post" class="new">
        <input type="text" name="text" aria-label="Add a todo" placeholder="+ type to add a todo" />
    </form>
    
    <!-- {#if data.length > 0} -->
        {#each todos as todo}
            <TodoItem {todo} />
        {/each}
    <!-- {/if} -->
</div>

<style>
    .todos{
        width: 100%;
        max-width: 42rem;
        margin: 4rem auto 0 auto;
    }

    .new{
        margin: 0 0 0.5rem 0;
    }

    .new input{
        font-size: 28px;
        width: 100%;
        padding: .5em 1em .3em 1em;
        box-sizing: border-box;
        background-color: rgba(255, 255, 255, .05);
        border-radius: 8px;
        text-align: center;
    }
</style>