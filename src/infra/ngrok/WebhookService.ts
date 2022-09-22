import ngrok, { NgrokClient } from 'ngrok';

export class WebhookService {
	private api: NgrokClient | null = ngrok.getApi();

	constructor(private readonly authToken: string | undefined) {
		this.authToken = authToken;
	}

	async start(port: number): Promise<string | undefined> {
		try {
			return await ngrok.connect(port);
		} catch (error) {
			console.error(error);
		}
	}

	async getTunnel(): Promise<string | undefined> {
		const tunnel = await this.api?.tunnelDetail();
		return tunnel?.public_url;
	}
}
