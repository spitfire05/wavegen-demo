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

<div class="bg-white border mb-2 shadow">
	<Controls bind:settings={settings}/>
</div>
<div class="bg-white border mb-2 shadow">
	<Components bind:settings={settings}/>
</div>

<div class="bg-white border shadow">
	<Chart settings={settings}/>
</div>
