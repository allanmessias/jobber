import dotenv from 'dotenv';
import { Telegraf } from 'telegraf';
dotenv.config();

export class BotApiConfig {
	public readonly BOT_TOKEN: string | undefined = process.env.BOT_TOKEN;

	init(): Telegraf | undefined {
		if (this.BOT_TOKEN) return new Telegraf(this.BOT_TOKEN);
	}
}
