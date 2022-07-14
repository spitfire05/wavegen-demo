<script lang="ts">
import type { cfg } from "src/types";


	import Chart from "./Chart.svelte";
	import Components from "./Components.svelte";
	import Controls from "./Controls.svelte";

	let settings: cfg = {
		sample_rate: 44100,
		n: 100,
		components: []
	}
</script>

<div class="bg-white border mb-2">
	<Controls bind:settings={settings}/>

	<Components bind:settings={settings}/>
</div>

<div class="bg-white border">
	<Chart settings={settings}/>
</div>
