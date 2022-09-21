import dotenv from 'dotenv';
dotenv.config();

export class ApiServerConfig {
	public static readonly PORT: string | undefined = process.env.API_PORT;
}
