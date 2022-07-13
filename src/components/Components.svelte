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
    <select id="type" bind:this={type}>
        <option value="sine">Sine</option>
        <option value="sawtooth">Sawtooth</option>
    </select>

    <label>Frequency:
        <input type="number" min=0 bind:value={frequency} class:bg-red-500={frequency <= 0}/>
    </label>

    <label>Amplitude:
        <input type="number" min=0 bind:value={amplitude} class:bg-red-500={amplitude <= 0}/>
    </label>

    <button disabled={!valid} on:click={onAdd}>Add waveform component</button>
</div>

<style>
    label {
        display: inline;
    }
</style>