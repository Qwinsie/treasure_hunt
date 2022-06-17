<script>
  import Button from "./Button.svelte";
  export let showButton;
  export let index;
</script>

<div>
  <img alt="clue" class="card" src="images/clues/{index}.png" />
  {#if showButton}
    <Button title="Click" />
  {/if}
</div>

<style>
</style>
