<script>
  import Button from "../components/Button.svelte";
  import Card from "../components/Card.svelte";
  import { goto } from "$app/navigation"
</script>

<main>
  <button on:click={() => goto("/players")}>Navigate</button>
  <Button title="Back" />
  <Button title="Level 1" />
  <Card index="1" showButton={false} />
</main>
