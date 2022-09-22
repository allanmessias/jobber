import ngrok, { Ngrok, NgrokClient } from 'ngrok';

export class NgrokService {
	private api: NgrokClient | null = ngrok.getApi();

	constructor(private readonly authToken: string) {
		this.authToken = authToken;
	}

	async startTunnel(port: number): Promise<string | undefined> {
		try {
			return await ngrok.connect(port);
		} catch (error) {
			console.error(error);
		}
	}

	async getTunnel(): Promise<Ngrok.TunnelsResponse | undefined> {
		const tunnel = await this.api?.listTunnels();
		return tunnel;
	}
}
