<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { func } from "src/types";

    const dispatch = createEventDispatcher();

    export let id: number;
    export let func: func;

    function onClick() {
        dispatch('remove', {
            id: id
        });
    }
</script>

<tr>
    <td class="type-td">
        {func.type}
    </td>

    <td>
        <label>f:
            <input type="number" min=0 bind:value={func.frequency} class:invalid={!(func.frequency > 0)} />
        </label>
        <label>A:
            <input type="number" min=0 bind:value={func.amplitude} class:invalid={!(func.amplitude > 0)} />
        </label>
    </td>

    <td>
        <button class="bg-gray-50" on:click={onClick}>Remove</button>
    </td>
</tr>

<style>
    label {
        display: inline;
    }
</style>
