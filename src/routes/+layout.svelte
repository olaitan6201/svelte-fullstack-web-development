<script>
    import '../app.css'
</script>

<main>
    <slot />

    <footer>
        Copyright
    </footer>
</main>

<style>
    footer{
        bottom: 0;
        left: 0;
        position: fixed;
        background-color: #777;
        text-align: center;
        font-weight: bold;
        width: 100%;
        padding: 20px;
    }
</style>