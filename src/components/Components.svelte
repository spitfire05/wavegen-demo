<script lang="ts">
import type { cfg, func } from "src/types";

    import Component from "./Component.svelte";

    export let settings: cfg;

    let type: any;
    let frequency = 3000.0;
    let amplitude = 1.0;

    let valid = true;

    function onAdd() {
        let func: func = {
            type: type.value,
            frequency: frequency,
            amplitude: amplitude
        };
        settings.components.push(func);

        settings = settings;
    }

    function onRemove(event: any) {
        settings.components.splice(event.detail.id, 1);

        settings = settings;
    }

    function validate(frequency: number) {
        if (frequency <= 0.0) {
            valid = false;
        }
        else {
            valid = true;
        }
    }

    $: validate(frequency);
</script>

<table>
    {#if settings.components.length > 0}
        <caption>Waveform components</caption>
    {/if}
{#each settings.components as c, i }
    <Component id={i} bind:func={c} on:remove={onRemove}/>
{/each}
</table>

<div>
    <label class="inline-block">
        <span>Function:</span>
        <select id="type" bind:this={type}>
            <option value="sine">Sine</option>
            <option value="sawtooth">Sawtooth</option>
        </select>
    </label>

    <label class="inline-block">
        <span>Frequency:</span>
        <input type="number" min=0 bind:value={frequency} class:invalid={frequency <= 0}/>
    </label>

    <label class="inline-block">
        <span>Amplitude:</span>
        <input type="number" min=0 bind:value={amplitude} class:invalid={amplitude <= 0}/>
    </label>

    <button class="bg-blue-500 text-white" disabled={!valid} on:click={onAdd}>Add waveform component</button>
</div>