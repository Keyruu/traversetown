<script lang="ts">
	export let text: string;
</script>

<div
	class="border-[1px] border-gray-500 w-1/6 h-4/6 flex flex-col justify-center items-center group hover:bg-white"
>
	<div class="flex-row" />
	<h1 class="mix-blend-difference font-bold text-3xl group-hover:scale-125 transition duration-300">
		{text}
	</h1>
</div>
