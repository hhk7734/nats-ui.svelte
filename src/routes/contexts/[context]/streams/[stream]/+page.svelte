<script>
	export let data;
</script>

<div class="flex flex-col gap-4">
	{#each data.msgs as msg}
		<ul>
			<li>{msg.subject}</li>
			<li>
				<ul>
					{#each msg.header as { key, value }}
						<li>{key}:{value}</li>
					{/each}
				</ul>
			</li>
			<li>{msg.seq}</li>
			<li>{msg.data}</li>
			<li>{msg.time}</li>
		</ul>
	{/each}
</div>
