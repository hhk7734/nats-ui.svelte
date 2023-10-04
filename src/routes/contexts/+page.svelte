<script>
  export let data;

  console.log(data.contexts);
</script>

<main>
  {#each data.contexts as context}
    <div >{context.id}</div>
  {/each}
</main>

<style></style>
