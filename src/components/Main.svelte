<script>
    import Sidebar from './Sidebar.svelte';
   
</script>

<style>
   

   @media (min-width: 768px) {
        .Main-container {
        display:grid;
        grid-template-columns: minmax(auto,1024px);
        justify-content: center;
        align-items:center;
    }
   }
   
   @media (min-width: 768px) {
       .Main-content{
        margin: 2rem 0 0 0;
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-gap: 60px;
        justify-content: space-between;
    }
   }

</style>


<main class="Main contenedor">
    <div class="Main-container">
        <div class="Main-content">
            <slot/>
            <Sidebar/>
        </div>
    </div>
</main>