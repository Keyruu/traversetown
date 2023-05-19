<script lang="ts">
	import Cursor from '$lib/components/Cursor.svelte';
	import IconLink from '$lib/components/IconLink.svelte';
	import { coords, extraStyles, getStylesString, resetMouse, scale } from '$lib/store/cursor';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	import '../app.scss';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		ScrollTrigger.create({
			animation: gsap.from('.logo', {
				y: '50vh',
				scale: 4
			}),
			scrub: true,
			trigger: '.content',
			start: 'top bottom',
			endTrigger: '.content',
			end: 'top center'
		});
		ScrollTrigger.create({
			animation: gsap.to('.navbar', {
				opacity: 1
			}),
			scrub: true,
			trigger: '.content',
			start: 'top bottom',
			endTrigger: '.content',
			end: 'top center'
		});
	});
</script>

<svelte:head>
	<title>Keyruu</title>
</svelte:head>
<div
	class="flex flex-col cursor-none overflow-x-hidden"
	on:pointermove={(e) => coords.set({ x: e.clientX, y: e.clientY })}
>
	<Cursor />
	<div class="navbar bg-neutral-focus fixed top-0 h-20 z-20 opacity-0" />
	<div class="logo-container">
		<img
			class="logo h-20 drop-shadow duration-500 logo-middle"
			src="/keyruu_logo.png"
			alt="Keyruu"
			on:mouseenter={() => {
				scale.set(2);
				extraStyles.set(getStylesString('#fff', 'difference'));
			}}
			on:mouseleave={() => {
				resetMouse();
			}}
		/>
	</div>
	<div class="flex flex-auto flex-col">
		<div class="placeholder" />
		<main class="flex grow flex-col justify-center">
			<div class="content">
				<slot />
			</div>
		</main>
	</div>
	<footer class="text-gray-600 body-font">
		<div class="bg-zinc-800">
			<div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
				<div
					class="tooltip"
					data-tip="This site does not need an Imprint, because it is a purely personal site without any commercial purpose."
				>
					<p class="text-gray-500 text-sm text-center sm:text-left">© 2023 Keyruu</p>
				</div>
				<span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
					<IconLink
						icon="mdi:discord"
						link="https://discord.gg/XYUmUeFwA7"
						iconColor="#6b7280"
						highlightColor="#5865F2"
						extraClasses="ml-3"
					/>
					<IconLink
						icon="mdi:instagram"
						link="https://www.instagram.com/iamkeyruu/?hl=de"
						iconColor="#6b7280"
						highlightColor="#e1306c"
						extraClasses="ml-3"
					/>
				</span>
			</div>
		</div>
	</footer>
</div>

<style lang="scss">
	.logo {
		position: fixed;
		top: 0;
		left: 50%;
		transform: translate(-50%);
		padding: 1em;
		z-index: 998;
	}

	.placeholder {
		width: 100%;
		height: 120vh;
	}

	.content {
		width: 100%;
		position: relative;
	}
</style>
