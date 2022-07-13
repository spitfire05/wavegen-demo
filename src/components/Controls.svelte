<script lang="ts">
import type { cfg } from "src/types";


    export let settings: cfg;

    const MAX_SAMPLES = 1000;

    let valid;

    function guard(settings: cfg) {
        if (settings.n > MAX_SAMPLES) {
            settings.n = MAX_SAMPLES;
        }
    }

    $: guard(settings);

</script>

<div>
    <label>Sampling rate [Hz]:
        <input class:invalid={settings.sample_rate <= 0} id="sample_rate" type=number bind:value={settings.sample_rate} min=0.0>
    </label>

    <label>N samples:
        <input id="n" type=number class:invalid={settings.n <= 0} bind:value={settings.n} min=0.0 max=10000>
    </label>
</div>

<style>
    label {
        display: inline;
        margin-right: 1em;
    }
</style>