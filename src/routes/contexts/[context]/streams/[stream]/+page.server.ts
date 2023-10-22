import { clients } from '$lib/server/nats';

interface Msg {
	subject: string;
	seq: number;
	header: { key: string; value: string }[];
	data: string;
	time: Date;
}

export async function load({ params }) {
	console.log(`/contexts/${params.context}/streams/${params.stream}	+page.server.ts`);

	if (!Object.hasOwn(clients, params.context)) {
		return {
			stream: {},
			msgs: []
		};
	}

	const streamInfo = await clients[params.context].jsm.streams.info(params.stream);

	const msgs: Msg[] = [];
	for (let i = 0; i < 3; i++) {
		const msg = await clients[params.context].jsm.streams.getMessage(params.stream, {
			seq: streamInfo.state.last_seq - i
		});
		msgs.push({
			subject: msg.subject,
			seq: msg.seq,
			header: msg.header.keys().map((key) => {
				return { key, value: msg.header.get(key) };
			}),
			data: Buffer.from(msg.data).toString(),
			time: msg.time
		});
	}

	return {
		stream: streamInfo,
		msgs: msgs
	};
}
