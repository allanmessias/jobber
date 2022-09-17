/**
 * 1. O chat deve ser iniciado quando um desenvolvedor conversar com o bot;
 * 2. O chat deve ter: 1 - chatId, 2 - Bot, 3 - Desenvolvedor
 */

export class TelegramChat {
	constructor(private readonly chatID: string | number) {
		this.chatID = chatID;
	}

	getChatId() {
		return this.chatID;
	}
}
