<script lang="ts">
  import { coords } from "../cursor";
</script>

<div
  class="flex flex-col cursor-none overflow-x-hidden"
  on:pointermove={(e) => coords.set({ x: e.clientX, y: e.clientY })}
>
  <slot />
</div>
