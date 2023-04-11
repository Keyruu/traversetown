<script lang="ts">
	import { coords, scale, extraStyles, icon } from '$lib/store/cursor';
	import Icon from '@iconify/svelte';
</script>

<div class="cursor">
	<div
		class="cursor--small flex justify-center items-center"
		style="
      left: {$coords.x >= 5 ? $coords.x - 5 : $coords.x}px; 
      top: {$coords.y >= 5 ? $coords.y - 5 : $coords.y}px;
      transform: translate(-30%, -30%) scale({$scale});
      {$extraStyles}"
	>
		<Icon icon={$icon} />
	</div>
</div>

<style>
	/* cursor */
	.cursor--small {
		position: fixed;
		left: 0;
		top: 0;
		border-radius: 50%;
		width: 20px;
		height: 20px;
		mix-blend-mode: difference;
		pointer-events: none;
		user-select: none;
		background: #000000;
		z-index: 9999;
	}
</style>
