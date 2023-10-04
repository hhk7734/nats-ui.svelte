import { contexts } from "$lib/server/nats";

export function load() {
	return {
		contextInfos: Object.values(contexts).map(({ id, name, url }) => ({
			id,
			name,
		})),
	};
}
