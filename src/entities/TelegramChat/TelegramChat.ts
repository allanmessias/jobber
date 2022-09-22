/**
 * 1. O chat deve ser iniciado quando um desenvolvedor conversar com o bot;
 * 2. O chat deve ter: 1 - chatId
 */

export class TelegramChat {
	private chatID!: string;

	getChatId() {
		return this.chatID;
	}

	setChatId(chatID: string) {
		this.chatID = chatID;
		return this.chatID;
	}
}
