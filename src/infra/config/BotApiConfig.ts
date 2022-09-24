/**
 * Esta classe é responsável por iniciar o bot
 * @author Allan Messias
 * @date 15/09/2022
 */

import dotenv from 'dotenv';
import { Telegraf, Telegram } from 'telegraf';
import { envConfig } from '../utils/configenv';

dotenv.config();

export class BotApiConfig {
	private readonly BOT_TOKEN: string | undefined = envConfig.BOT_TOKEN;

	getTelegramBot(): Telegram | undefined {
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

	launchWebhook(public_url: string, port: number) {
		return this.getTelegraf()?.launch({
			webhook: {
				domain: public_url,
				port: port,
			},
		});
	}
}
