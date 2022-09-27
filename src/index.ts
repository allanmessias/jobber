import { BotService } from './infra/config/BotService';
import { Telegraf } from 'telegraf';
import { envConfig } from './infra/utils/configenv';

const botService = new BotService();

async function bootstrap(): Promise<void> {
	await botService.launchBot();
}

bootstrap();
