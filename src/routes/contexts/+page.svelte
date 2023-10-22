<script>
	export let data;
</script>

{#each Object.values(data.contexts) as context}
	<a href={`/contexts/${context.id}`}>{context.name}</a>
{/each}
