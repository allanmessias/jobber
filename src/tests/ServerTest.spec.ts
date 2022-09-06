import request from 'supertest';
import { ServerAplication } from '../application/ServerApplication';

let server: ServerAplication;

beforeAll(async () => {
	server = new ServerAplication();
	server.start();
});

describe('get server', () => {
	it('Should return 200', async () => {
		request(server).get('/');
		const response = request(server).get('/');
		expect((await response).status).toBe(200);
	});
});
