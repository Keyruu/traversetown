<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';

	import CurrentTrack from '$lib/components/CurrentTrack.svelte';
	import FullStack from '$lib/components/FullStack.svelte';
	import Releases from '$lib/components/Releases.svelte';
	import {
		SubscribeSpotifyTrackDocument,
		type SubscribeSpotifyTrackSubscription
	} from '$lib/generated/graphql';
	import { subscriptionStore } from '@urql/svelte';
	import 'atropos/css';
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { fade } from 'svelte/transition';
	import { client } from '../client';

	const spotifyTrack = subscriptionStore<SubscribeSpotifyTrackSubscription>({
		client,
		query: SubscribeSpotifyTrackDocument
	});

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
		{ name: 'Spezi', image: 'keyruu_logo.png' },
		{ name: 'Backend', image: 'keyruu_logo.png' },
		{ name: 'DevOps', image: 'keyruu_logo.png' },
		{ name: 'Design', image: 'keyruu_logo.png' },
		{ name: 'Gaming', image: 'keyruu_logo.png' },
		{ name: 'Music', image: 'keyruu_logo.png' },
		{ name: 'Frontend', image: 'keyruu_logo.png' },
		{ name: 'Design', image: 'keyruu_logo.png' }
	];

	let releases: any;

	let skew = tweened(0, {
		duration: 800,
		easing: cubicOut
	});

	let spotifyWeight = tweened(400, {
		duration: 200,
		easing: cubicOut
	});

	onMount(async () => {
		gsap.registerPlugin(ScrollTrigger);

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
				let proxy = self.getVelocity() / -250;
				if (Math.abs(proxy) < 20) {
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
				if (Math.abs(proxy) < 30) {
					skew.set(proxy, { duration: 0 });
					skew.set(0);
				}
			}
		});

		const res = await fetch('https://keyruu.de/api/v1/releases');
		releases = (await res.json()).list;
	});
</script>

<div>
	<div class="foggy-sea w-full mb-24 flex flex-col justify-center">
		<p
			class="mix-blend-difference lg:text-8xl md:text-6xl mb-8 font-thin w-full text-center text-4xl"
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
							class="font-bold lg:text-9xl md:text-7xl text-4xl uppercase hover:-translate-y-4 transition duration-200 ease-out  {i %
								2 ==
							0
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
							class="font-bold lg:text-9xl md:text-7xl text-4xl 
							uppercase hover:-translate-y-4 transition duration-200 ease-out 
							{i % 2 == 0 ? 'different-font' : ''}"
						>
							{like.name}
						</p>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<section
		id="devops"
		class="h-[1000px] sm:mb-0 mb-20 flex sm:flex-row flex-col justify-center items-center text-center w-full"
	>
		<FullStack />
	</section>
	<section id="keyruu" class=" mb-20 flex flex-col items-center">
		<div class="md:text-6xl text-4xl  z-10 flex">
			<p class="font-semibold">my&nbsp;</p>
			<p class="font-extralight">music:</p>
		</div>
		{#if releases}
			<Releases {releases} />
		{:else}
			<p class="text-4xl">Loading...</p>
		{/if}
	</section>
	<section
		id="music"
		class="lg:h-[1000px] md:h-[800px] sm:h-[600px] sm:mb-0 mb-20 h-[500px] flex items-center flex-col now-playing-layout"
	>
		<div class="md:text-6xl text-4xl z-10 sm:mb-24 mb-16 flex">
			<p class="font-extralight">my&nbsp;</p>
			<p
				class="hover:text-green-600 md:w-56 w-32 text-center align-middle"
				style="font-weight: {$spotifyWeight};"
				on:mouseenter={() => spotifyWeight.set(700)}
				on:mouseleave={() => spotifyWeight.set(400, { duration: 100 })}
			>
				spotify&nbsp;
			</p>
			<p class="font-extralight">activity:</p>
		</div>
		{#if $spotifyTrack.data?.subSpotifyTrack == null}
			Waiting for song...
		{:else}
			{#key $spotifyTrack.data.subSpotifyTrack?.spotifyId}
				<div in:fade={{ duration: 1000 }}>
					<CurrentTrack spotifyTrack={$spotifyTrack.data.subSpotifyTrack} />
				</div>
			{/key}
		{/if}
	</section>
</div>

<style lang="scss">
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
