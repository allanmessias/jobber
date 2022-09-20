/**
 * Esta classe é responsável por iniciar o bot
 * @author Allan Messias
 * @date 15/09/2022
 */

import dotenv from 'dotenv';
import { Telegraf, Telegram } from 'telegraf';

dotenv.config();

export class BotApiConfig {
	private readonly BOT_TOKEN: string | undefined = process.env.BOT_TOKEN;

	initializeTelegramBot(): Telegram | undefined {
		if (this.BOT_TOKEN) {
			const telegraf = new Telegraf(this.BOT_TOKEN);
			return telegraf.telegram;
		}
		throw new Error(
			'It was not possible to connect with the bot, please try later',
		);
	}
}
