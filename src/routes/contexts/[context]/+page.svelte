<script>
	import { page } from '$app/stores';
</script>

<div class="flex flex-col gap-4">
	<a href={`${$page.url.pathname}/consumers`}>consumers</a>
	<a href={`${$page.url.pathname}/publish`}>publish</a>
	<a href={`${$page.url.pathname}/streams`}>streams</a>
	<a href={`${$page.url.pathname}/subscribe`}>subscribe</a>
</div>
