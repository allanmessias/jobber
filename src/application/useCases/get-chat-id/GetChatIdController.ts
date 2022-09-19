import { Response, Request } from 'express';
import { TelegramChat } from '../../../entities/TelegramChat/TelegramChat';

export class GetChatIdController {
	handle(req: Request, res: Response) {
		const chat_id = req.body.message.chat.id;
		return chat_id;
	}
}
