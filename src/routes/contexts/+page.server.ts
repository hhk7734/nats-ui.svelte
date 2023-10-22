import { contexts } from '$lib/server/nats';

export async function load() {
	return {
		contexts
	};
}
