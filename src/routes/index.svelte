<script context="module">
	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import Post from "../components/Post.svelte";
	export let posts;
</script>

<style>

.Posts {
	display: grid;
	justify-content: space-between;
	grid: 15px;
	grid-template-columns: 1fr;
}
</style>

<svelte:head>
	<title>Alan Gustavo</title>
	<meta name="description" content="Blog Alan">
	<meta name="twitter:card" content="sumary_large_image">
	<meta name="twitter:site" content="">
	<meta name="twitter:title" content="Alan Gustavo">
	<meta name="twitter:description" content="Blog Alan">
	<meta name="twitter:image" content="https://arepa.s3.amazonaws.com/blogpost-cover.png">
	
	
	<meta name="og:title" content="Alan Gustavo">
	<meta name="og:description" content="Blog Alan">
	<meta name="og:image" content="https://arepa.s3.amazonaws.com/blogpost-cover.png">
	<meta name="og:url" content="https://blogalan.netlify.app/">
	<meta name="og-site_name" content="Alan Gustavo">
	<meta name="og:location" content="es_ES">
	<meta name="og:type" content="article">
	<meta name="fb:app_id" content="">
	
</svelte:head>

<div class="Home">
	<div class="Posts">
		{#each posts as post }
			<Post {post}/>
		{/each}
	</div>
</div>