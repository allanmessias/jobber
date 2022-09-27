import { Context } from 'telegraf';
export class BotRepliesUseCase {
	handleStart() {
		return async (ctx: Context): Promise<void> => {
			await ctx.reply('teste');
		};
	}
}
