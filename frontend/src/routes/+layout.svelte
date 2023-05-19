<script lang="ts">
	import Cursor from '$lib/components/Cursor.svelte';
	import IconLink from '$lib/components/IconLink.svelte';
	import { coords, extraStyles, getStylesString, resetMouse, scale } from '$lib/store/cursor';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { afterUpdate, onMount } from 'svelte';
	import '../app.scss';

	function isMobile() {
		let check = false;
		if (typeof navigator == undefined) {
			(function (a) {
				if (
					/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
						a
					) ||
					/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
						a.substr(0, 4)
					)
				)
					check = true;
			})(navigator.userAgent || navigator?.vendor);
		}
		return check;
	}

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

	let show = false;
	afterUpdate(() => {
		show = true;
	});
</script>

<svelte:head>
	<title>Keyruu</title>
</svelte:head>
<div
	class="flex flex-col cursor-none overflow-x-hidden"
	on:pointermove={(e) => coords.set({ x: e.clientX, y: e.clientY })}
>
	{#if isMobile() === false}
		<Cursor />
	{/if}
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
