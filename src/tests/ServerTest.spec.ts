import request from 'supertest';
import { ServerAplication } from '../infra/Server/ServerApplication';
import { ServerRouter } from '../routes/Server/ServerRouter';

const server = new ServerAplication();
const router = new ServerRouter(server);

beforeAll(() => {
	jest.spyOn(server, 'start');
});

describe('get server', () => {
	it('Should return 200 and Hello World', async () => {
		const sut = router.getServer();
		const res = await request(sut).get('/');

		expect(res.statusCode).toEqual(200);
		expect(res.body).toHaveProperty('message');
	});
});
