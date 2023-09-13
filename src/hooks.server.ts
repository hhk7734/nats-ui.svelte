import { env } from "$env/dynamic/private";
import * as fs from "fs";
import * as yaml from "js-yaml";
import type { NATSConfig } from "$lib/server/nats";
import { connect } from "$lib/server/nats";

function startup() {
	console.log("Server is starting up...");
	const config = yaml.load(
		fs.readFileSync(env.NATS_CONFIG_PATH, "utf8"),
	) as NATSConfig;
	connect(config);
}

function shutdown() {
	console.log("Server is shutting down...");
}

startup();

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
