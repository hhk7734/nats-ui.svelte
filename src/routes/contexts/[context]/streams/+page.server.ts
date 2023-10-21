import { contexts } from '$lib/server/nats';

export async function load({ params }) {
	if (!Object.hasOwn(contexts, params.context)) {
		return {
			streams: []
		};
	}

	return {
		streams: await contexts[params.context].jsm.streams.list().next()
	};
}
