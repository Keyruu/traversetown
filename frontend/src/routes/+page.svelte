<script lang="ts">
	import { SubscribeSpotifyTrackStore } from '$houdini';
	import { draw, fade, fly } from 'svelte/transition';
	import CurrentTrack from '$lib/components/CurrentTrack.svelte';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	import 'atropos/css';
	import { tweened } from 'svelte/motion';
	import { cubicInOut, cubicOut } from 'svelte/easing';

	const spotifyTrack = new SubscribeSpotifyTrackStore();
	spotifyTrack.listen();

	const likes = [
		{ name: 'DevOps', image: 'keyruu_logo.png' },
		{ name: 'Music', image: 'keyruu_logo.png' },
		{ name: 'Design', image: 'keyruu_logo.png' },
		{ name: 'Gaming', image: 'keyruu_logo.png' },
		{ name: 'Frontend', image: 'keyruu_logo.png' },
		{ name: 'Backend', image: 'keyruu_logo.png' },
		{ name: 'Spezi', image: 'keyruu_logo.png' },
		{ name: 'DevOps', image: 'keyruu_logo.png' }
	];
	const likes2 = [
		{ name: 'Backend', image: 'keyruu_logo.png' },
		{ name: 'Frontend', image: 'keyruu_logo.png' },
		{ name: 'DevOps', image: 'keyruu_logo.png' },
		{ name: 'Design', image: 'keyruu_logo.png' },
		{ name: 'Music', image: 'keyruu_logo.png' },
		{ name: 'Gaming', image: 'keyruu_logo.png' },
		{ name: 'Spezi', image: 'keyruu_logo.png' },
		{ name: 'Design', image: 'keyruu_logo.png' }
	];

	let skew = tweened(0, {
		duration: 800,
		easing: cubicOut
	});

	onMount(() => {
		ScrollTrigger.create({
			animation: gsap.to('.personal-text', {
				xPercent: -50
			}),
			scrub: true,
			trigger: '.likes',
			start: 'top bottom',
			endTrigger: '.likes',
			end: 'bottom top',
			onUpdate: (self) => {
				let proxy = self.getVelocity() / -300;
				console.log(proxy);
				if (Math.abs(proxy) < 30) {
					skew.set(proxy, { duration: 0 });
					skew.set(0);
				}
			}
		});

		ScrollTrigger.create({
			animation: gsap.to('.personal-text-inverse', {
				xPercent: 50
			}),
			scrub: true,
			trigger: '.likes',
			start: 'top bottom',
			endTrigger: '.likes',
			end: 'bottom top',
			onUpdate: (self) => {
				let proxy = self.getVelocity() / -300;
				console.log(proxy);
				if (Math.abs(proxy) < 30) {
					skew.set(proxy, { duration: 0 });
					skew.set(0);
				}
			}
		});
	});
</script>

<div>
	<div class="foggy-sea w-full mb-24 flex flex-col justify-center">
		<p
			class="mix-blend-difference lg:text-8xl md:text-6xl mb-8 font-thin w-full text-center sm:text-3xl"
		>
			i like
		</p>
		<div class="likes">
			<div
				class="flex-row flex mix-blend-difference origin-bottom"
				style="transform: skewX({$skew}deg)"
			>
				<div class="personal-text w-full flex">
					{#each likes as like, i}
						<p
							in:fly={{ y: -50, duration: 200, delay: 200 * (i + 1) }}
							class="font-bold lg:text-9xl md:text-7xl sm:text-4xl uppercase  {i % 2 == 0
								? 'different-font'
								: ''}"
						>
							{like.name}
						</p>
					{/each}
				</div>
			</div>
			<div
				class="flex-row flex mix-blend-difference origin-bottom"
				style="transform: translateX(-50%) skewX({$skew * -1}deg)"
			>
				<div class="personal-text-inverse w-full flex">
					{#each likes2 as like, i}
						<p
							in:fly={{ y: -50, duration: 200, delay: 200 * (i + 1) }}
							class="font-bold lg:text-9xl md:text-7xl sm:text-4xl uppercase  {i % 2 == 0
								? 'different-font'
								: ''}"
						>
							{like.name}
						</p>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div class="h-full flex items-center flex-col now-playing-layout">
		<div class="text-6xl  z-10 mb-24 flex">
			<p class="font-extralight">my&nbsp;</p>
			<p
				class="hover:text-green-600 font-normal transition duration-75 ease-in-out hover:font-bold w-56 text-center align-middle"
			>
				spotify&nbsp;
			</p>
			<p class="font-extralight">activity:</p>
		</div>
		{#if $spotifyTrack.data == null}
			Waiting for song...
		{:else}
			{#key $spotifyTrack.data.subSpotifyTrack?.spotifyId}
				<div in:fade={{ duration: 1000 }}>
					<CurrentTrack spotifyTrack={$spotifyTrack.data} />
				</div>
			{/key}
		{/if}
	</div>
</div>

<style lang="scss">
	.now-playing-layout {
		height: 1000px;
	}

	.different-font {
		font-family: 'Montagu Slab', serif;
		font-weight: 300;
	}

	.foggy-sea {
		background-image: url('/foggy_sea.jpg');
		background-repeat: no-repeat;
		background-size: auto;
		height: 600px;
	}

	.personal-text {
	}
</style>
