<script>
	import '../app.postcss';

	export let data;
</script>

<div class="flex flex-row">
	<aside class="left-0 top-0 z-40 h-screen w-64 flex-none">
		<ul>
			<li>
				<a class="block hover:bg-gray-700 hover:text-white" href="/">Home</a>
			</li>
			<li class="">
				Contexts
				<ul>
					{#each Object.values(data.contexts) as context}
						<li class="">
							<a
								href={`/contexts/${context.id}`}
								class="block pl-4 text-gray-400 hover:bg-gray-700 hover:text-white"
							>
								{context.name}
							</a>
						</li>
					{/each}
				</ul>
			</li>
		</ul>
	</aside>

	<main class="flex-1">
		<slot />
	</main>
</div>
