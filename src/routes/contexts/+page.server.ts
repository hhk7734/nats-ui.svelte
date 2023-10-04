import { contexts } from "$lib/server/nats";

export async function load() {
	return {
		contexts: Object.entries(contexts).map(([contextName, context]) => ({
			id: context.id,
		})),
	};
}
