import { env } from "$env/dynamic/private";
import * as fs from "fs";
import * as yaml from "js-yaml";
import { connect as _connect } from "nats";
import type { NatsConnection, JetStreamManager, ConnectionOptions } from "nats";

export const config = yaml.load(
	fs.readFileSync(env.NATS_CONFIG_PATH, "utf8"),
) as NATSConfig;

interface NATSConfig {
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

interface NATSClient {
	name: string;
	conn: NatsConnection;
	jsm: JetStreamManager;
}

export const clients = new Map<string, NATSClient>();

export async function connect(config: NATSConfig) {
	for (const serverConfig of config.servers) {
		const { id, name, host, port, user, password } = serverConfig;
		const server = `${host}:${port}`;

		const opts = { servers: [server] } as ConnectionOptions;
		if (user) opts.user = user;
		if (password) opts.pass = password;

		const conn = await _connect(opts);
		const jsm = await conn.jetstreamManager();
		clients.set(id, { name: name ? name : server, conn, jsm });
	}
}
