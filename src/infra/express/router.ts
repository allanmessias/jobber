import { Router, Request, Response } from 'express';
import dotenv from 'dotenv';
import { chatId } from '../../application/useCases/get-chat-id/index';
dotenv.config();

export const router = Router();
export const botToken = process.env.BOT_TOKEN;
export const path = '/';

router.get(path, (req: Request, res: Response) => {
	return chatId.handle(req, res);
});
