import { Telegram, Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { config } from '../utils/configenv';
import { BotApiConfig } from './BotApiConfig';
import { WebhookService } from '../ngrok/WebhookService';
dotenv.config();

export class BotApiConfigSpy {
	public BOT_TOKEN: string | undefined = config.BOT_TOKEN;

	constructor(private webhook: WebhookService) {
		this.webhook = webhook;
	}

	initializeTelegramBot(): Telegram | undefined {
		if (this.BOT_TOKEN) {
			const telegraf = new Telegraf(this.BOT_TOKEN);
			return telegraf.telegram;
		}
		throw new Error(
			'It was not possible to connect with the bot, please try later',
		);
	}

	getTelegraf(): Telegraf | undefined {
		if (this.BOT_TOKEN) return new Telegraf(this.BOT_TOKEN);
	}
}

const makeSut = () => {
	const webhookService = new WebhookService(config.TUNNEL);
	const sut = new BotApiConfigSpy(webhookService);

	return {
		webhookService,
		sut,
	};
};

describe('BotApiConfig', () => {
	it('Should be an instance of Telegraf', () => {
		const sut = new BotApiConfig();
		expect(sut.initializeTelegramBot()).toBeInstanceOf(Telegram);
	});

	it('Should throw an error if no token is provided', () => {
		const { sut } = makeSut();
		sut.BOT_TOKEN = undefined;
		expect(() => {
			sut.initializeTelegramBot();
		}).toThrow('It was not possible to connect with the bot, please try later');
	});

	it('Should start if webhook is provided', () => {
		const { sut, webhookService } = makeSut();
		const bot = sut.getTelegraf();
		const domain =
			'https://04bd-2804-d4b-9a89-da00-d5d4-f169-4367-4351.sa.ngrok.io';
		const port: number | undefined = config.PORT;
		if (port) {
			expect(
				bot?.launch({
					webhook: { domain: webhookService.getTunnel(), port: port },
				}),
			).resolves;
		}
	});
});
