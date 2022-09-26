import { JobberBot } from '../../../entities/JobberBot/JobberBot';
import { BotApiConfig } from '../../../infra/config/BotApiConfig';

export class BotRepliesUseCaseSpy {
	constructor(private readonly botApiConfig: BotApiConfig) {
		this.botApiConfig = botApiConfig;
	}

	startBot() {
		const telegrafBot = this.botApiConfig.getTelegraf();
		return telegrafBot?.start((ctx) =>
			ctx.reply('You started a conversation with me'),
		);
	}

	hiCommand() {
		const telegrafBot = this.botApiConfig.getTelegraf();
		return telegrafBot?.on('text', async (ctx) => {
			await ctx.telegram.sendMessage(ctx.message.chat.id, 'Hello');
		});
	}
}

const botApiConfig = new BotApiConfig();

beforeAll(() => {
	botApiConfig.launchBot();
});

describe('BotRepliesUseCase', () => {
	it('Should start the conversation with the bot', async () => {
		const botApiConfig = new BotApiConfig();
		const sut = new BotRepliesUseCaseSpy(botApiConfig);
		expect(sut.startBot()).toBe('You started a conversation with me');
	});

	it('Should reply when conversation is started', async () => {
		const botApiConfig = new BotApiConfig();
		const sut = new BotRepliesUseCaseSpy(botApiConfig);
		expect(sut.hiCommand()).toBe('Hello');
	});
});
