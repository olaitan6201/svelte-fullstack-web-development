<script>
// @ts-ignore
import TodoItem from "$lib/todo-item.svelte"
const title = "Todos"
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="todos">
    <h1>{title}</h1>
    
    <form action="" method="" class="new">
        <input type="text" name="text" aria-label="Add a todo" placeholder="+ type to add a todo" />
    </form>
    
    <TodoItem done />
    <TodoItem />
    <TodoItem />
    <TodoItem />
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