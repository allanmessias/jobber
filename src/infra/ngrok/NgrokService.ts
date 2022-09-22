import ngrok from 'ngrok';

export interface Token {
	AuthToken: string;
}

export class NgrokService {
	private api = ngrok.getApi();

	constructor(private readonly authToken: Token) {
		this.authToken = authToken;
	}

	async startTunnel(port: number) {
		try {
			return await ngrok.connect(port);
		} catch (error) {
			console.error(error);
		}
	}

	async getTunnel() {}
}
