import { clients } from '$lib/server/nats';

export async function load({ params }) {
	if (!Object.hasOwn(clients, params.context)) {
		return {
			streams: []
		};
	}

	return {
		streams: await clients[params.context].jsm.streams.list().next()
	};
}
