<script lang="ts">
	import type { SubscribeSpotifyTrack$result } from '$houdini';
	import Icon from '@iconify/svelte';
	import ColorThief, { type Color } from 'colorthief';
	import { linear, cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { fade } from 'svelte/transition';

	import { extraStyles, getStylesString, icon, resetMouse, scale } from '$lib/store/cursor';
	import 'atropos/css';

	export let spotifyTrack: SubscribeSpotifyTrack$result;

	function getProgress(progressMs: number, durationMs: number): number {
		return (progressMs / durationMs) * 100;
	}

	let progress = tweened(0, {
		duration: 5000,
		easing: linear
	});
	let durationMs: number;
	let progressMs: number;
	let isTooDark: boolean;
	$: if (spotifyTrack && spotifyTrack?.subSpotifyTrack?.isCurrent) {
		progressMs = spotifyTrack!.subSpotifyTrack!.progressMs!;
		durationMs = spotifyTrack!.subSpotifyTrack!.durationMs!;
		progress.set(getProgress(progressMs, durationMs));
	}

	let img: HTMLImageElement;
	let dominantColor: Color;
	let rgbString: string;
	let imgLoaded: boolean = false;
	$: if (img) {
		img.onload = () => {
			imgLoaded = true;
			dominantColor = new ColorThief().getColor(img);
			rgbString = `rgb(${dominantColor[0]},${dominantColor[1]},${dominantColor[2]})`;
			isTooDark = dominantColor[0] + dominantColor[1] + dominantColor[2] < 150;
		};
	}

	let coverTranslateX: number;
	let coverTranslateY: number;
	let coverScale = tweened(1, {
		duration: 400,
		easing: cubicOut
	});
	let textTranslateY = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

	function coverMouseMoved(event: MouseEvent) {
		const target = event.currentTarget as Element;
		const rect = target.getBoundingClientRect(),
			x = event.clientX - rect.x,
			y = event.clientY - rect.y;
		coverTranslateX = (x - target.clientWidth / 2) / 90;
		coverTranslateY = (y - target.clientHeight / 2) / 90;
	}
</script>

<div class="flex flex-col items-center justify-center">
	<a
		class="w-auto container cover cursor-pointer"
		on:mouseenter={() => {
			scale.set(4);
			coverScale.set(1.1);
			extraStyles.set(getStylesString('#fff', 'difference'));
			icon.set('mdi:spotify');
			textTranslateY.set(30);
		}}
		on:mouseleave={() => {
			resetMouse();
			icon.set('');
			coverScale.set(1);
			textTranslateY.set(0);
			coverTranslateX = 0;
			coverTranslateY = 0;
		}}
		on:mousemove={coverMouseMoved}
		href={spotifyTrack.subSpotifyTrack?.songLink}
		target="_blank"
		rel="noreferrer"
		style={`
          transform: translate(${coverTranslateX}px, ${coverTranslateY}px) scale(${$coverScale});
        `}
	>
		{#if spotifyTrack.subSpotifyTrack?.isCurrent === false || spotifyTrack.subSpotifyTrack?.isPlaying === false}
			<div in:fade={{ duration: 200 }} class="content z-10 m-auto text-black opacity-60">
				<Icon icon="material-symbols:pause" width="300" height="300" />
			</div>
		{:else}
			<div class="w-full h-1.5 bg-neutral opacity-80 z-10 content mt-auto rounded-b-lg">
				<div class="h-1.5 rounded-bl-lg bg-slate-100" style="width: {$progress}%;" />
			</div>
		{/if}
		{#if imgLoaded === false}
			<div class="rounded-lg cover content bg-gray-400">Content</div>
		{/if}
		<img
			bind:this={img}
			crossorigin="anonymous"
			class="rounded-lg shadow-lg cover content"
			src={spotifyTrack.subSpotifyTrack?.coverUrl}
			alt="albumCover"
		/>
		{#if spotifyTrack.subSpotifyTrack?.isPlaying}
			<div
				in:fade={{ duration: 200 }}
				class="content cover rounded-lg"
				style="box-shadow: 0 0 50px 15px {rgbString};"
			/>
		{/if}
	</a>
	<div
		style="background: {rgbString}; transform: translateY({$textTranslateY}px);"
		class="h-full px-4 overflow-hidden text-center relative mt-8 py-0.5 font-extrabold"
	>
		<h1
			class={`title-font sm:text-4xl text-3xl font-medium flex ${
				isTooDark ? 'text-slate-300' : 'text-gray-900'
			}`}
		>
			<p class="font-semibold">{spotifyTrack.subSpotifyTrack?.trackName}</p>
			&nbsp;—&nbsp;
			<p class="font-light">{spotifyTrack.subSpotifyTrack?.artistName}</p>
		</h1>
	</div>
</div>

<style lang="scss">
	.cover {
		max-height: 37vh;
		max-width: 37vh;
	}

	.container {
		display: grid;
	}

	.content,
	.overlay {
		grid-area: 1 / 1;
	}
</style>
