<script lang="ts">
	import { register } from 'swiper/element/bundle';
	import Cover from './Cover.svelte';
	// Import Swiper styles
	import { PUBLIC_NOCODB_URL } from '$env/static/public';
	import { changeMouse, getStylesString, resetMouse } from '$lib/store/cursor';
	import 'swiper/css';
	import 'swiper/css/effect-coverflow';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import IconLink from './IconLink.svelte';

	register();

	let slideIndex = 0;
	export let releases: any[];

	function onSlideChange(event: CustomEvent) {
		slideIndex = event.detail[0].activeIndex;
	}

	function extractImageURL(cover: any) {
		return `${PUBLIC_NOCODB_URL}/${cover[0].path}`;
	}

	function tripleMouse() {
		changeMouse(3, getStylesString('#fff', 'difference'));
	}

	function doubleMouse() {
		changeMouse(2, getStylesString('#fff', 'difference'));
	}
</script>

<div class="text-gray-600 body-font my-auto overflow-hidden">
	<div class="w-full mx-auto flex flex-col px-5 justify-center items-center">
		<div class="custom-swiper flex items-center justify-center">
			<swiper-container
				navigation="true"
				pagination="true"
				effect={'coverflow'}
				centered-slides={true}
				slides-per-view={'auto'}
				coverflow-effect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: false
				}}
				on:slidechange={onSlideChange}
				class="h-full"
			>
				{#each releases as release}
					<swiper-slide class="flex items-center justify-center">
						<Cover
							on:enter={tripleMouse}
							on:leave={resetMouse}
							image={extractImageURL(release.cover)}
						/>
					</swiper-slide>
				{/each}
			</swiper-container>
		</div>
		<div
			style="background: {releases[slideIndex].primary_color}"
			class="h-full px-4 overflow-hidden text-center relative py-0.5"
		>
			<h1 class="title-font sm:text-4xl text-3xl font-medium text-gray-900">
				<strong>{releases[slideIndex].songtitle}</strong> —
				{releases[slideIndex].artists}
			</h1>
		</div>
		<div class="flex">
			<IconLink
				icon="fa-spotify"
				margin="m-8"
				width={50}
				height={50}
				link={releases[slideIndex].spotify}
				highlightColor={releases[slideIndex].primary_color}
				on:customMouseEnter={doubleMouse}
				on:customMouseLeave={resetMouse}
			/>
			<IconLink
				icon="fa-apple"
				margin="m-8"
				width={50}
				height={50}
				link={releases[slideIndex].apple}
				highlightColor={releases[slideIndex].primary_color}
				on:customMouseEnter={doubleMouse}
				on:customMouseLeave={resetMouse}
			/>
			<IconLink
				icon="fa-youtube"
				margin="m-8"
				width={50}
				height={50}
				link={releases[slideIndex].youtube}
				highlightColor={releases[slideIndex].primary_color}
				on:customMouseEnter={doubleMouse}
				on:customMouseLeave={resetMouse}
			/>
		</div>
	</div>
</div>

<style>
	.custom-swiper {
		height: 60vh;
	}

	@media only screen and (max-width: 600px) {
		.custom-swiper {
			height: 250px;
		}
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {
		.custom-swiper {
			height: 300px;
		}
	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
		.custom-swiper {
			height: 300px;
		}
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {
		.custom-swiper {
			height: 310px;
		}
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1300px) {
		.custom-swiper {
			height: 350px;
		}
	}

	@media only screen and (min-width: 1540px) {
		.custom-swiper {
			height: 60vh;
			width: 60vh;
		}
	}
</style>
