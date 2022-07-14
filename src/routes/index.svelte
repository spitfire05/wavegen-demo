<script lang="ts">
    import App from "../components/App.svelte";

    // @ts-ignore
    var git_hash = __GIT_HASH__;
</script>

<App/>

<div class="absolute bottom-0 right-0 text-xs font-light text-gray-500">version git:{git_hash}</div>
