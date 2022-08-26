<script lang="ts">
    export let todo: Todo
    $: status = todo?.done ? 'done' : '';
</script>

<div class="todo {status}">
    <form action="" method="">
        <input type="hidden" name="done" value="" />
        <button aria-label="Mark done/not done" class="toggle"></button>
    </form>

    <form action="" method="" class="text">
        <input type="text" value={todo.text}/>
        <button aria-label="Save todo" class="save"></button>
    </form>

    <form action="" method="">
        <button aria-label="Delete todo" class="delete"></button>
    </form>
</div>


<style>
    .todo{
        display: grid;
        grid-template-columns: 2rem 1fr 2rem;
        grid-gap: .5rem;
        align-items: center;
        margin: 0 0 .5rem 0;
        padding: .5rem;
        background-color: white;
        border-radius: 8px;
        filter: drop-shadow(2px 4px 6px rgba(0,0,0,.1));
        transform: translate(-1px, -1px);
        transition: filter .2s, transform .2s;
    }

    .todo button{
        width: 2em;
        height: 2em;
        border: none;
        background-color: transparent;
        background-position: 50% 50%;
        background-repeat: no-repeat;
    }

    .todo input{
        flex: 1;
        padding: .5em 2em .5em .8em;
        border-radius: 3px;
    }

    .toggle{
        border: 1px solid rgba(0, 0, 0, .2)!important;
        border-radius: 50%;
        box-sizing: border-box;
        /* background-size: 1em auto; */
        padding: .5px;
        background-size: 20px;
    }

    .text{
        position: relative;
        display: flex;
        align-items: center;
        flex: 1;
    }

    .save{
        position: relative;
        right: 0;
        opacity: 0;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAArUlEQVRIie2WQQqDMBBFn8Vb1N6k7pVeqsseqPRA1XvYlWCHGP+kQqDmwSwGvvMSMSoUjsgNGIFpUTFsZu7vXvFgpKlit9xKfxFPwCOXOCivVgYpOZuvTB+dUUcGqsQWtcpJzF3FXKuK1Vu9B18udce7U8RZsYf/CZwd1zfAKzDHLW4c0pnLllg5TkkviK05x3u4ijireDR96MOu1JJBWUxP+L8rtd5Ap4gL/8UHxzxnWli0s98AAAAASUVORK5CYII=");
        background-size: 20px 20px;
    }

    .todo input:focus + .save, .save:focus{
        transition: opacity .2s;
        opacity: 1;
    }

    .delete{
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAq0lEQVRIieWVUQqCQBCGvzpND9s98kbmU4/eK7rE+qZBsN6heplgGVfUQaXshwH5Hf5v1hGFf9EFeKkqrWG3RNjYuuqwfQLwtE4mkI1p1+Nbj9rJS+1gVn0FwAMF0EZeC+RAZQXH73YungOClBOvUL0mQBzo1HWYA/CBHKP7B+CR6Oto8SX3adVHtPiSPXBW0wbx/BBgu5+KuyGrmdKcATXj/2Q1cDIM9QN6A0KVZNfyr7QUAAAAAElFTkSuQmCC");
        opacity: .2;
        background-size: 20px;
    }

    .delete:hover, .delete:focus{
        transition: opacity .2s;
        opacity: 1;
    }

    .done{
        transform: none;
        opacity: .4;
        filter: drop-shadow(0 0 1px rgba(0, 0, 0, .1));        
    }

    .done .toggle{
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAA20lEQVRoge3UW0rDQBiG4WcDatGqaKvoylyCuAVxcR4RT+ARXIc3epGRaEXaFGQifM/NkGQu3j9hQkRERERE/FNjHGGjdsg8xnjGO/Yrt3Q2wpMm/gSLdXO6WcedJv4Sy3VzulnzPX6lZswC9so6i8k3XzUeDjQxx1iasncVt2X/FYZ/mzabEV5MH2KI67LvRjNMb2xpf4UXfh7IAc7L83s9/d//NsQAZ+X+Azar1M1ocohdnJbrRz2P/7StPRNv2vhRzaiuvn6JV+zUzZnPGIdljYiIiIiIiOirDygZMv282BqmAAAAAElFTkSuQmCC");
    }
</style>