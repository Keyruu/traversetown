<script lang="ts">
	import Icon from '@iconify/svelte';

	export let iconColor = '#3f3f46';
	let currentColor = iconColor;
	export let icon: string;
	export let link: string;
	export let highlightColor = iconColor;
	export let width: number = 20;
	export let height: number = 20;
	export let margin = '';
	export let extraClasses = '';
</script>

<a
	on:mouseenter={() => {
		currentColor = highlightColor;
	}}
	on:mouseleave={() => (currentColor = iconColor)}
	class="{margin} transition duration-500 hover:scale-110 {extraClasses}"
	style="color: {currentColor}"
	href={link}
	target="_blank"
	rel="noreferrer"
>
	<Icon {icon} {width} {height} />
</a>
