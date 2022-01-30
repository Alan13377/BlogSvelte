<script>
	import SkillBars from './SkillBars.svelte';

	const skillsLevels = [
		{
			skills: 'HTML',
			icono: 'html-5.svg',
			porcentaje: 80,
			color: 'green',
			delay: 300
		},
		{ skills: 'CSS', icono: 'css-3.svg', porcentaje: 50, color: 'blue', delay: 600 },
		{
			skills: 'JavaScript',
			icono: 'javascript.svg',
			porcentaje: 40,
			color: 'yellow',
			delay: 1000
		},
		{
			skills: 'MySql',
			icono: 'mysql.svg',
			porcentaje: 30,
			color: 'red',
			delay: 1300
		},
		{
			skills: 'SvelteJs',
			icono: 'svelte-icon.svg',
			porcentaje: 40,
			color: 'orange',
			delay: 1600
		}
	];
</script>

<main class="container">
	<section class="Skills">
		<div class="">
			<h2 class="Skills-titulo">Habilidades</h2>
		</div>

		<div class="skills-content">
			<div class="skills-experiencia">
				<p>
					Desarrollador Frontend con experiencia en maquetacion con HTML y CSS y el lengueje de
					programación JavaScript.
				</p>
				<p>Uso del Framework SvelteJs para la elaboracion de aplicaciones SPA y SSR</p>
				<p>Conocimiento basico de SQL</p>
			</div>
			<div class="skills-bar">
				<div class="bars">
					<div class="info">
						{#each skillsLevels as { skills, icono, porcentaje, color, delay }}
							<SkillBars {skills} {icono} {porcentaje} {color} {delay} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	
	.Skills-titulo {
		text-align: center;
		font-size: 3rem;
		font-weight: bold;
	}

	@media (min-width: 768px) {
		.skills-content {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 5rem;
		}
	}
</style>
