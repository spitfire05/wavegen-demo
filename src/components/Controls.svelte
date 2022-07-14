<script lang="ts">
import type { cfg } from "src/types";


    export let settings: cfg;

    const MAX_SAMPLES = 10000;
    const MAX_SAMPLE_RATE = 1000000;

    let valid;

    function guard(settings: cfg) {
        if (settings.n > MAX_SAMPLES) {
            settings.n = MAX_SAMPLES;
        }
        if (settings.sample_rate > MAX_SAMPLE_RATE) {
            settings.sample_rate = MAX_SAMPLE_RATE
        }
    }

    $: guard(settings);

</script>

<div>
    <label class="inline-block">
        <span>Sampling rate [Hz]:</span>
        <input class:invalid={settings.sample_rate <= 0} id="sample_rate" type=number bind:value={settings.sample_rate} min=0.0>
    </label>

    <label class="inline-block">
        <span>N samples:</span>
        <input id="n" type=number class:invalid={settings.n <= 0} bind:value={settings.n} min=0.0 max={MAX_SAMPLES}>
    </label>
</div>