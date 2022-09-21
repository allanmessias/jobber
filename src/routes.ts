import { Request, Response } from 'express';
import { Router } from 'express';
import { chatIdController } from './application/useCases/get-chat-id';

const router = Router();

router.post('/', (req: Request, res: Response) => {
	return chatIdController.handle(req, res);
});

export { router };
