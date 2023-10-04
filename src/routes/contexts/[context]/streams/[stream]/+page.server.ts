import { contexts } from "$lib/server/nats";

export async function load({ params }) {
	if (!Object.hasOwn(contexts, params.context)) {
		return {
			stream: {},
		};
	}

	const streamInfo = await contexts[params.context].jsm.streams.info(
		params.stream,
	);

	return {
		stream: streamInfo,
		msg: {
			...(await contexts[params.context].jsm.streams.getMessage(params.stream, {
				seq: streamInfo.state.last_seq,
			})),
		},
	};
}
