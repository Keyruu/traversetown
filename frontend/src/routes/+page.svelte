<script lang="ts">
	import { SubscribeSpotifyTrackStore } from '$houdini';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';

	const spotifyTrack = new SubscribeSpotifyTrackStore();
	spotifyTrack.listen();

	function calcProgress(progressMs: number, durationMs: number): number {
		return (progressMs / durationMs) * 100;
	}

	let progress = tweened(0, {
		duration: 5000,
		easing: linear
	});
	let progressMs: number;
	let durationMs: number;
	$: if ($spotifyTrack.data) {
		progressMs = $spotifyTrack.data!.subSpotifyTrack!.progressMs!;
		durationMs = $spotifyTrack.data!.subSpotifyTrack!.durationMs!;
		progress.set(calcProgress(progressMs, durationMs));
	}
</script>

{#if $spotifyTrack.data == null}
	Waiting for new books...
{:else}
	<img src={$spotifyTrack.data.subSpotifyTrack?.coverUrl} alt="albumCover" />
	<p class="font-bold">{$spotifyTrack.data?.subSpotifyTrack?.trackName}</p>
	<p>Artist: {$spotifyTrack.data?.subSpotifyTrack?.artistName}</p>
	{#if $spotifyTrack.data.subSpotifyTrack?.isCurrent}
		<progress class="progress h-4 w-96" value={$progress} max="100" />
	{/if}
{/if}

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
