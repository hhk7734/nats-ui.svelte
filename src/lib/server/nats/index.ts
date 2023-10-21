import { connect as _connect } from 'nats';
import type { NatsConnection, JetStreamManager, ConnectionOptions } from 'nats';

export interface NATSConfig {
	servers: NATSServerConfig[];
}

interface NATSServerConfig {
	id: string;
	name?: string;
	host: string;
	port: number;
	user?: string;
	password?: string;
}

interface Context {
	id: string;
	name: string;
	url: string;

	conn: NatsConnection;
	jsm: JetStreamManager;
}

export interface Contexts {
	[id: string]: Context;
}

export const contexts: Contexts = {};

export async function connect(config: NATSConfig) {
	for (const serverConfig of config.servers) {
		const { id, name, host, port, user, password } = serverConfig;
		const server = `${host}:${port}`;

		const opts = { servers: [server] } as ConnectionOptions;
		if (user) opts.user = user;
		if (password) opts.pass = password;

		try {
			const conn = await _connect(opts);
			const jsm = await conn.jetstreamManager();
			contexts[id] = {
				id,
				name: name ? name : server,
				url: server,
				conn,
				jsm
			};
		} catch (err) {
			console.error(`Failed to connect to NATS server ${server}`);
			console.error(err);
		}
	}
}
