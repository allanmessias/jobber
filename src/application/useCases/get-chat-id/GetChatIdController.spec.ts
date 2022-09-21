import { Response, Request } from 'express';
import { TelegramChat } from '../../../entities/TelegramChat/TelegramChat';

export class GetChatIdControllerSpy {
	constructor(private telegramChat: TelegramChat) {
		this.telegramChat = telegramChat;
	}

	handle(req: Request, res: Response) {
		const chat_id = req.body.message.chat.id;
		if (chat_id) {
			this.telegramChat.setChatId(chat_id);
			return res.status(200).send();
		}

		return res.status(400).json({
			message: 'Erro inesperado',
		});
	}
}
