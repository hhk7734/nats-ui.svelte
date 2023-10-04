<script>
  import { page } from "$app/stores";
</script>

<main class="flex flex-col gap-4">
  <a href={`${$page.url.pathname}/consumers`}>consumers</a>
  <a href={`${$page.url.pathname}/publish`}>publish</a>
  <a href={`${$page.url.pathname}/streams`}>streams</a>
  <a href={`${$page.url.pathname}/subscribe`}>subscribe</a>
</main>

<style>
</style>
