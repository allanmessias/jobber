import { Request, Response } from 'express';
import { ServerAplication } from '../../infra/Server/ServerApplication';

export class ServerRouter {
	constructor(private app: ServerAplication) {}

	getServer() {
		this.app.init().get('/', (req: Request, res: Response) => {
			res.send({ message: 'Hello World' });
		});
	}
}
