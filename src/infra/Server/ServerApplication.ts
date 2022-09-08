import express, { Express } from 'express';
import { Server } from 'http';
import { ApiServerConfig } from '../config/ApiServerConfig';

export class ServerAplication {
	private readonly host?: string | undefined;
	private readonly port: string | undefined = ApiServerConfig.PORT;

	public init(): Express {
		const app = express();
		return app;
	}
	public start(): Server {
		return this.init().listen(this.port);
	}
}
