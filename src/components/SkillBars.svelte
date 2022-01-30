<script>
	import { tweened } from 'svelte/motion';
	import { backInOut } from 'svelte/easing';
	export let skills;
	export let porcentaje;
	export let color;
	export let delay;
	export let icono;

	const progreso = tweened(0, {
		delay: delay,
		duration: 2000,
		easing: backInOut
	});

	progreso.set(porcentaje);
</script>

<div class="Icono-Skills">
	<div>
		<p>{skills}</p>
	</div>
	<div>
		<img src={icono} alt="icono" />
	</div>
</div>
<div class="container">
	<div style="width:{$progreso}%; background-color:{color}" class="skills">{porcentaje}%</div>
</div>

<style>
	.skills {
		text-align: right; /* Right-align text */
		padding-top: 10px; /* Add top padding */
		padding-bottom: 10px; /* Add bottom padding */
		color: white; /* White text color */
		width: 100%;
		padding: 1.4rem;
		border-radius: 1.2rem;
		font-size: 1.5rem;
	}
	p {
		text-transform: uppercase;
	}
	img {
		width: 30px;
	}

	.Icono-Skills {
		display: flex;
		align-items: center;
		gap: 2rem;
	}
</style>
