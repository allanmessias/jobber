import { BotRepliesUseCase } from './application/useCases/JobberBot';
import { BotService } from './infra/config/BotService';

const botService = new BotService();
const telegraf = botService.getTelegraf();
const botRepliesUseCase = new BotRepliesUseCase();

async function bootstrap(): Promise<void> {
	telegraf.start(botRepliesUseCase.handleStart());

	await telegraf.launch();
}

bootstrap().catch((err) => console.log({ error: err }));
