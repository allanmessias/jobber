import ngrok, { NgrokClient, Ngrok } from 'ngrok';
import { envConfig } from '../utils/configenv';
import { mockNgrokResponse } from './__mocks__';

export type NgrokTypes = {
	tunnels: Ngrok.Tunnel[];
};

export class WebhookServiceSpy {
	private api: NgrokClient | null = ngrok.getApi();

	constructor(private readonly authToken: string | undefined) {
		this.authToken = authToken;
	}

	async start(port: number | undefined): Promise<string | undefined> {
		try {
			return await ngrok.connect(port);
		} catch (error) {
			console.error(error);
		}
	}

	async getTunnels(): Promise<undefined | Ngrok.Tunnel[]> {
		const listTunnels = await this.api?.listTunnels();
		return listTunnels?.tunnels;
	}

	async getTunnelPublicUrl(): Promise<string | undefined> {
		const tunnel = await this.api?.tunnelDetail('');
		return tunnel?.public_url;
	}
}

beforeAll(async () => {
	const sut = new WebhookServiceSpy(envConfig.NGROK_TOKEN);
	await sut.start(envConfig.PORT);
});

afterAll(async () => {
	await ngrok.disconnect();
	await ngrok.kill();
});

it('Should return an array of tunnels', async () => {
	const sut = new WebhookServiceSpy(envConfig.NGROK_TOKEN);
	const tunnels = await sut.getTunnels();
	expect(tunnels).toBeInstanceOf(Array);
});
