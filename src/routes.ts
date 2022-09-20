import { Request, Response } from 'express';
import { Router } from 'express';

const router = Router();

router.post('/', (req: Request, res: Response) => {
	console.log(req.body);
	res.send(req.body);
});

export { router };
