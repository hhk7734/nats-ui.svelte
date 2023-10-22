<script>
	import { page } from '$app/stores';

	export let data;
</script>

<div class="flex flex-col gap-4">
	{#each data.streams as stream}
		{@const name = stream.config.name}
		<a href={`${$page.url.pathname}/${name}`}>{name}</a>
	{/each}
</div>
