<script lang="ts">
	import '../app.scss';
</script>

<svelte:head>
	<title>Keyruu</title>
</svelte:head>

<div class="flex h-screen flex-col justify-center overflow-hidden">
	<div class="flex flex-1 flex-col overflow-y-auto">
		<main class="flex max-h-full grow flex-col items-center justify-center">
			<slot />
		</main>
	</div>
</div>
