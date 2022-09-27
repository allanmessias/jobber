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

const botService = new BotService();

beforeAll(() => {
	botService.launchBot();
});

describe('BotRepliesUseCase', () => {
	it('Should start the conversation with the bot', async () => {
		const botService = new BotService();
		const sut = new BotRepliesUseCaseSpy(botService);
		expect(sut.startBot()).toBe('You started a conversation with me');
	});

	it('Should reply when conversation is started', async () => {
		const botService = new BotService();
		const sut = new BotRepliesUseCaseSpy(botService);
		expect(sut.hiCommand()).toBe('Hello');
	});
});
