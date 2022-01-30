
<script>
	import Skills from '../components/Skills.svelte';
</script>
<svelte:head>
	<title>About</title>
</svelte:head>


<div class="container">
	<section class="entrada">
		<Skills />
	</section>
</div>

<style>
	:global(html) {
		box-sizing: border-box;
		font-size: 62.5%; /**1rem = 10px*/
	}
	:global(h1) {
		font-family: 'PT Sans', sans-serif;
		font-weight: bold;
	}

	

	.container {
		margin: auto;
		width: 100%;
		border-radius: 10px;
		box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
		line-height: 18.4px;
		margin-top: 20px;
		padding: 20px;
	}
	.entrada {
		padding: 3rem;
		border-bottom: 1px solid #e1e1e1;
		margin-bottom: 2rem;
	}
</style>
