import ngrok, { NgrokClient, Ngrok } from 'ngrok';
import { envConfig } from '../utils/configenv';

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
		if (listTunnels) return listTunnels.tunnels;
	}

	async getTunnelPublicUrl(): Promise<undefined | string> {
		const tunnelName = await this.getTunnelName();
		const tunnelUrl = await this.api?.tunnelDetail(tunnelName);
		return tunnelUrl?.public_url;
	}

	async getTunnelName(): Promise<any> {
		const tunnels = await this.getTunnels();
		return tunnels?.forEach((tunnel) => tunnel.name);
	}
}
