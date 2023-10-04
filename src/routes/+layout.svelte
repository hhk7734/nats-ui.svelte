<script>
  import "../app.postcss";

  export let data;
</script>

<div class="flex flex-row">
  <aside class="h-screen top-0 left-0 z-40 w-64 flex-shrink-0">
    <ul>
      <li>
        Contexts
        <ul>
          {#each data.contextInfos as { id, name }}
            <li>
              <a
                href={`/contexts/${id}`}
                class="block p-4 text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                {name}
              </a>
            </li>
          {/each}
        </ul>
      </li>
      <li>a</li>
    </ul>
  </aside>

  <main class="flex-1">
    <slot />
  </main>
</div>
