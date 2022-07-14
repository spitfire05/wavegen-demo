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

<tr class="border-b border-gray-200">
    <td class="type-td">
        {func.type}
    </td>

    <td>
        <label class="inline-block">f:
            <input type="number" min=0 bind:value={func.frequency} class:invalid={!(func.frequency > 0)} />
        </label>
        <label class="inline-block">A:
            <input type="number" min=0 bind:value={func.amplitude} class:invalid={!(func.amplitude > 0)} />
        </label>
    </td>

    <td>
        <button class="bg-red-500 text-white" on:click={onClick}>Remove</button>
    </td>
</tr>
