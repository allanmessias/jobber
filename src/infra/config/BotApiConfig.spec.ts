import { Telegram, Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { config } from '../utils/configenv';
import { BotApiConfig } from './BotApiConfig';
dotenv.config();

export class BotApiConfigSpy {
	public BOT_TOKEN: string | undefined = config.BOT_TOKEN;

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
	const sut = new BotApiConfigSpy();

	return {
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
});
