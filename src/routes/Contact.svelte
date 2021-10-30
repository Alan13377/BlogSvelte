<script>
  import Contact from "../utils/Contact"
</script>


<svelte:head>
    <title>Contact</title>
</svelte:head>

<style>
   label{
       display: block;
   }
   input{
       display: block;
   }

   @media (min-width: 480px) {
       .btn{
        box-shadow: inset 0px 1px 0px 0px #bee2f9;
        background: linear-gradient(to bottom, #63b9ee 5%, #468ccf 100%);
        background-color: #63b9ee;
        border-radius:6px;
        border:1px solid #3866a3;
        display: inline-block;
        cursor: pointer;
        color:#14396a;
        font-family: "Arial";
        font-size:15px;
        font-weight: bold;
        padding:6px 24px;
        text-decoration: none;
        text-shadow: 0px 1px 0px #7cacde;
        width: 100%;

    }

   }
   @media (min-width: 768px) {
       .btn{
            display: block;
            width: auto;
       }
   }
   

    .btn:hover{
        background: linear-gradient(to bottom, #468ccf 5%, #63b8ee 100%);
        background-color: #468ccf;

    }

    .btn:active{
        position: relative;
        top: 1px;
    }
</style>

<div class="Contact">
    <h2>Contact</h2>
    <div class="Contact-info">
        <form action="https://formspree.io/f/mbjqvloa" method="POST" class="formulario">
        <fieldset>
            <legend>Información Personal</legend>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" placeholder="Introduzca su nombre" name="nombre" required>
            <label for="email">E-mail:</label>
            <input type="email" id="email" placeholder="Introduzca su correo" name="email" required>
            <label for="informacion">Mensaje:</label>
            <textarea  id="informacion" placeholder="Introduzca su mensaje" name="mensaje" required></textarea>
            <button class="btn" on:click={Contact}>Enviar</button>
        </fieldset>
    </form>
    </div>

</div>