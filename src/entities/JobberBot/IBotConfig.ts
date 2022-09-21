import { Telegram } from 'telegraf';

export interface IBotConfig {
	initializeTelegramBot(): Telegram | undefined;
}
