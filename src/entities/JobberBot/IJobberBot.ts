import { BotApiConfig } from '../../infra/config/BotApiConfig';
import { Telegram } from 'telegraf';

export interface IJobberBot {
	greets(): string | Telegram;
	greetsByHour(): string | Telegram;
	jobAsk(): string | Telegram;
	tellToWait(): string | Telegram;
}
