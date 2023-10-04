<script>
  import { page } from "$app/stores";

  export let data;
</script>

<main class="flex flex-col gap-4">
  {$page.url.pathname}
  <p class="whitespace-normal" style="line-break: anywhere;">
    {JSON.stringify(data.msg)}
  </p>
  <div>{atob(data.msg?.smr.message.data)}</div>
</main>

<style>
</style>
