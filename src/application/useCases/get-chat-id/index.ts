import { TelegramChat } from '../../../entities/TelegramChat/TelegramChat';
import { GetChatIdController } from './GetChatIdController';

const telegramChat = new TelegramChat();
const chatIdController = new GetChatIdController(telegramChat);

console.log(telegramChat);

export { chatIdController };
