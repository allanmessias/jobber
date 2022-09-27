import { BotService } from '../../../infra/config/BotService';

export class BotRepliesUseCaseSpy {
	constructor(private readonly botService: BotService) {
		this.botService = botService;
	}

	startBot() {
		const telegrafBot = this.botService.getTelegraf();
		return telegrafBot?.start((ctx) =>
			ctx.reply('You started a conversation with me'),
		);
	}

	hiCommand() {
		const telegrafBot = this.botService.getTelegraf();
		return telegrafBot?.on('text', async (ctx) => {
			await ctx.telegram.sendMessage(ctx.message.chat.id, 'Hello');
		});
	}
}
