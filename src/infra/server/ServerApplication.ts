import express, { Express } from 'express';
import { Server } from 'http';
import dotenv from 'dotenv';
dotenv.config();

export class ServerAplication {
	private readonly host?: string | undefined;
	private readonly port: string | undefined = process.env.PORT;

	public init(): Express {
		const app = express();
		return app;
	}
	public start(): Server {
		console.log(`Server rodando na porta ${this.port}`);
		return this.init().listen(this.port);
	}
}
